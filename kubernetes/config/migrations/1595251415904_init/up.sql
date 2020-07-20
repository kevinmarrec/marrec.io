CREATE TABLE public.lol (
    id integer NOT NULL,
    name text NOT NULL
);
CREATE SEQUENCE public.lol_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.lol_id_seq OWNED BY public.lol.id;
CREATE TABLE public.test (
    id integer NOT NULL
);
CREATE SEQUENCE public.test_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.test_id_seq OWNED BY public.test.id;
ALTER TABLE ONLY public.lol ALTER COLUMN id SET DEFAULT nextval('public.lol_id_seq'::regclass);
ALTER TABLE ONLY public.test ALTER COLUMN id SET DEFAULT nextval('public.test_id_seq'::regclass);
ALTER TABLE ONLY public.lol
    ADD CONSTRAINT lol_name_key UNIQUE (name);
ALTER TABLE ONLY public.lol
    ADD CONSTRAINT lol_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.test
    ADD CONSTRAINT test_pkey PRIMARY KEY (id);
