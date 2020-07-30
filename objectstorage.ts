import { extname } from 'path'
import fetch from 'node-fetch'
import express from 'express'
import multer from 'multer'
import aws4 from 'aws4'
import sharp from 'sharp'
import { v4 as uuid } from 'uuid'

const upload = multer()
const app = express()

const bucket = 'bucktests'
const server = 's3.fr-par.scw.cloud'

const host = `${bucket}.${server}`

const generateKey = () => uuid().replace(/(\w+)-?/g, x => parseInt(x, 32).toString(36))

async function uploadFile (file: Buffer, path: string) {
  const hash = aws4.sign(
    {
      service: 's3',
      region: 'fr-par',
      host,
      method: 'PUT',
      path
    },
    {
      accessKeyId: 'X',
      secretAccessKey: 'X'
    }
  )

  const result = await fetch(`https://${host}/${path}`, {
    method: 'PUT',
    headers: hash.headers,
    body: file
  })

  if (!result.ok) {
    throw new Error('Upload failed')
  }

  const url = 'https://' + host + '/' + aws4.sign(
    {
      service: 's3',
      region: 'fr-par',
      host,
      path: path + '?X-Amz-Expires=2',
      signQuery: true
    },
    {
      accessKeyId: 'X',
      secretAccessKey: 'X'
    }
  ).path

  return url
}

app.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(422).end('No file specified')
  }

  if (req.file.size > 10_000_000) {
    return res.status(422).end('Size limit (10 Mo) excedeed')
  }

  const path = generateKey() + extname(req.file.originalname)

  try {
    const url = await uploadFile(req.file.buffer, path)
    await uploadFile(await sharp(req.file.buffer).resize(100).toBuffer(), path.replace('.', '.preview.'))
    res.json({
      url
    })
  } catch (err) {
    res.status(500).send(err.message)
  }
})

app.listen('4000', () => { console.log('Running...') })
