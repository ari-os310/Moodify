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
-- Name: affirmations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.affirmations (
    id integer NOT NULL,
    affirmation character varying NOT NULL,
    mood_id integer NOT NULL
);


--
-- Name: affirmations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.affirmations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: affirmations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.affirmations_id_seq OWNED BY public.affirmations.id;


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
-- Name: affirmations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.affirmations ALTER COLUMN id SET DEFAULT nextval('public.affirmations_id_seq'::regclass);


--
-- Name: moods mood_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.moods ALTER COLUMN mood_id SET DEFAULT nextval('public.moods_id_seq'::regclass);


--
-- Data for Name: affirmations; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.affirmations (id, affirmation, mood_id) FROM stdin;
1	I can feel my anger and still stay in control.	1
2	I release the anger that I feel and am open to compassion.	1
3	I am a calm and loving person.	1
4	It is natural to feel anger, I am not a bad person for feeling human things.	1
5	I transform and heal my anger to use the energy positively.	1
6	I deserve to be happy.	2
7	I deserve to have an amazing life, and all the good I desire, I deserve.	2
8	Even plants get a little sad every now and then, I will bloom vibrantly again.	2
9	The more I focus on what to appreciate in life the happier I feel.	3
10	I am truly blessed.	3
11	Today I choose joy regardless of any hiccup.	3
12	There is no wrong or right way in purusing happiness.	4
13	I don't always have to know what's coming, because I can handle it.	4
14	I am in charge of doing my best, and the rest will follow.	4
15	I am scared, but that won't stop me.	5
16	I feel the fear, and I do it anyway.	5
17	I will live in my power and my dreams, not in my fear.	5
22	I let go of my need to control everything and everyone.	6
23	I am safe. Everything is ok.	6
24	I'm going to focus on things I love to get me through this.	6
25	 I forgive myself for any mistakes.	7
26	I choose not to believe the negative thoughts in my head.	7
27	My presence makes the world a better place.	7
28	I see each day as a new and positive adventure!	8
29	I feel the beauty in all of the wonderful things in my life.	8
30	I have worked hard to get here, it's time to celebrate me!	8
31	I trust the process of life and don’t resist change.	9
32	I trust myself to make the right decisions in life.	9
33	Everything is happening as it should, the universe has my back.	9
\.


--
-- Data for Name: moods; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.moods (mood_id, mood_type, mood_blurb, mood_avatar) FROM stdin;
1	Anger	Let's take some space !	https://image.flaticon.com/icons/svg/1579/1579480.svg
2	Sad	Everyone's sad sometimes!	https://image.flaticon.com/icons/svg/2204/2204408.svg
7	Shame	No shame in the game!	https://image.flaticon.com/icons/svg/817/817778.svg
3	Happy	Celebrate your joy!	https://image.flaticon.com/icons/svg/1788/1788866.svg
8	Excited	Hip Hip Hooray!	https://image.flaticon.com/icons/svg/2040/2040632.svg
6	Anxiety	Breathe with me.	https://image.flaticon.com/icons/svg/826/826580.svg
5	Fear	Release All of it.	https://image.flaticon.com/icons/svg/1970/1970352.svg
4	Confused	Uhhhh?	https://image.flaticon.com/icons/svg/1917/1917675.svg
9	Trusting	Embrace life <3	https://image.flaticon.com/icons/svg/2077/2077885.svg
\.


--
-- Name: affirmations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.affirmations_id_seq', 33, true);


--
-- Name: moods_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.moods_id_seq', 9, true);


--
-- Name: affirmations affirmations_affirmation_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.affirmations
    ADD CONSTRAINT affirmations_affirmation_key UNIQUE (affirmation);


--
-- Name: affirmations affirmations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.affirmations
    ADD CONSTRAINT affirmations_pkey PRIMARY KEY (id);


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
-- Name: affirmations affirmations_mood_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.affirmations
    ADD CONSTRAINT affirmations_mood_id_fkey FOREIGN KEY (mood_id) REFERENCES public.moods(mood_id);


--
-- PostgreSQL database dump complete
--

