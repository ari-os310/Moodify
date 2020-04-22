--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: moods; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.moods (
    mood_id integer NOT NULL,
    mood_type character varying NOT NULL,
    mood_blurb character varying,
    mood_avatar character varying
);


--
-- Name: moods_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.moods_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: moods_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.moods_id_seq OWNED BY public.moods.mood_id;


--
-- Name: moods mood_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.moods ALTER COLUMN mood_id SET DEFAULT nextval('public.moods_id_seq'::regclass);


--
-- Data for Name: moods; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.moods (mood_id, mood_type, mood_blurb, mood_avatar) FROM stdin;
1	Anger	Let's take some space !	https://image.flaticon.com/icons/svg/1579/1579480.svg
2	Sad	Everyone's sad sometimes!	https://image.flaticon.com/icons/svg/2204/2204408.svg
7	Shame	No shame in the game!	https://image.flaticon.com/icons/svg/817/817778.svg
4	Confusion	Uhhhh?	https://image.flaticon.com/icons/svg/1917/1917675.svg
3	Happy	Celebrate your joy!	https://image.flaticon.com/icons/svg/1788/1788866.svg
8	Excited	Hip Hip Hooray!	https://image.flaticon.com/icons/svg/2040/2040632.svg
6	Anxiety	Breathe with me.	https://image.flaticon.com/icons/svg/826/826580.svg
5	Fear	Release All of it.	https://image.flaticon.com/icons/svg/1970/1970352.svg
9	Accepting	Embrace life <3	https://image.flaticon.com/icons/svg/2077/2077885.svg
\.


--
-- Name: moods_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.moods_id_seq', 9, true);


--
-- Name: moods moods_mood_type_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.moods
    ADD CONSTRAINT moods_mood_type_key UNIQUE (mood_type);


--
-- Name: moods moods_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.moods
    ADD CONSTRAINT moods_pkey PRIMARY KEY (mood_id);


--
-- PostgreSQL database dump complete
--

