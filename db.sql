--
-- PostgreSQL database dump
--

-- Dumped from database version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)

-- Started on 2019-09-23 11:52:36 +07

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

--
-- TOC entry 1 (class 3079 OID 13041)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2943 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 196 (class 1259 OID 16578)
-- Name: board; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.board (
    "boardID" bigint NOT NULL,
    "boardName" text NOT NULL,
    "createdBy" text,
    "createdAt" timestamp with time zone DEFAULT now(),
    status text,
    "userID" text NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now(),
    "updatedBy" text
);


--
-- TOC entry 199 (class 1259 OID 16602)
-- Name: board_boardID_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.board ALTER COLUMN "boardID" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."board_boardID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 197 (class 1259 OID 16586)
-- Name: task; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.task (
    "taskID" bigint NOT NULL,
    "taskName" text NOT NULL,
    "createdBy" text,
    "updatedBy" text,
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone DEFAULT now(),
    status text,
    "boardID" bigint NOT NULL
);


--
-- TOC entry 200 (class 1259 OID 16604)
-- Name: task_taskID_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.task ALTER COLUMN "taskID" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."task_taskID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 198 (class 1259 OID 16594)
-- Name: user; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."user" (
    "userID" text NOT NULL,
    email text,
    "firstName" text,
    "lastName" text,
    "userPhone" text,
    "birthDay" text,
    "avatarURL" text,
    "updatedAt" timestamp with time zone DEFAULT now(),
    status text,
    "typeUser" text
);


--
-- TOC entry 2931 (class 0 OID 16578)
-- Dependencies: 196
-- Data for Name: board; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (57, 'qweqweqwe', 'hello gia badm', '2019-09-20 17:15:03.220883+07', 'good', 'osMml3j5adcaxycKjoNSxxqVeqj2', '2019-09-20 17:15:03.220883+07', 'hello gia badm');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (3, 'tungBoard3', 'tungbeo', '2019-09-18 09:45:18.436769+07', NULL, '4ngHyrZtcoblJbdgrnoQ8sqhqeE3', '2019-09-18 09:45:18.436769+07', 'tungbeo');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (4, 'test', 'sfsadfssfsadfs', '2019-09-18 11:38:21.877344+07', 'good', 'oIDC22T6HgTSvxKOGg1LhK00rT52', '2019-09-18 11:38:21.877344+07', 'sfsadfssfsadfs');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (5, 'tungBoard', 'sfsadfssfsadfs', '2019-09-18 11:41:04.707088+07', 'JUST CREATED', 'oIDC22T6HgTSvxKOGg1LhK00rT52', '2019-09-18 11:41:04.707088+07', 'sfsadfssfsadfs');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (6, 'an test', 'sfsadfssfsadfs', '2019-09-18 12:20:44.600423+07', 'good', 'oIDC22T6HgTSvxKOGg1LhK00rT52', '2019-09-18 12:20:44.600423+07', 'sfsadfssfsadfs');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (7, 'travel', 'sfsadfssfsadfs', '2019-09-18 15:05:04.999466+07', '', 'oIDC22T6HgTSvxKOGg1LhK00rT52', '2019-09-18 15:05:04.999466+07', 'sfsadfssfsadfs');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (8, 'travel', 'sfsadfssfsadfs', '2019-09-18 15:14:54.015765+07', '', 'oIDC22T6HgTSvxKOGg1LhK00rT52', '2019-09-18 15:14:54.015765+07', 'sfsadfssfsadfs');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (9, 'travel', '0', '2019-09-18 15:26:52.896766+07', '', '5fxGYg2tIsRlR1nmeEdrXebTqeF3', '2019-09-18 15:26:52.896766+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (10, 'travel', '0', '2019-09-18 15:27:10.082281+07', '', '5fxGYg2tIsRlR1nmeEdrXebTqeF3', '2019-09-18 15:27:10.082281+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (11, 'travel', 'sfsadfssfsadfs', '2019-09-18 16:01:53.084325+07', '', 'oIDC22T6HgTSvxKOGg1LhK00rT52', '2019-09-18 16:01:53.084325+07', 'sfsadfssfsadfs');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (12, 'travel', '0', '2019-09-18 16:30:33.046+07', NULL, '5M4jdwwkBmbSHebH23HzI7PgwqU2', '2019-09-18 16:30:33.046+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (13, 'travel', '0', '2019-09-18 17:07:29.816956+07', NULL, '5M4jdwwkBmbSHebH23HzI7PgwqU2', '2019-09-18 17:07:29.816956+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (14, 'education', 'sfsadfssfsadfs', '2019-09-18 17:50:08.800772+07', '', 'oIDC22T6HgTSvxKOGg1LhK00rT52', '2019-09-18 17:50:08.800772+07', 'sfsadfssfsadfs');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (15, 'lolo', '0', '2019-09-19 10:29:49.889028+07', '', '5M4jdwwkBmbSHebH23HzI7PgwqU2', '2019-09-19 10:29:49.889028+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (16, 'sdf', 'sfsadfssfsadfs', '2019-09-19 10:37:22.966128+07', 'good', 'oIDC22T6HgTSvxKOGg1LhK00rT52', '2019-09-19 10:37:22.966128+07', 'sfsadfssfsadfs');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (17, 'asd', 'sfsadfssfsadfs', '2019-09-19 10:39:52.455937+07', 'good', 'oIDC22T6HgTSvxKOGg1LhK00rT52', '2019-09-19 10:39:52.455937+07', 'sfsadfssfsadfs');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (18, '1234', '0', '2019-09-19 10:41:02.320515+07', '', '5M4jdwwkBmbSHebH23HzI7PgwqU2', '2019-09-19 10:41:02.320515+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (19, 'alo', 'sfsadfssfsadfs', '2019-09-19 12:07:02.673259+07', 'good', 'GAkm5VoA2zSA8pR8my22iVKe84O2', '2019-09-19 12:07:02.673259+07', 'sfsadfssfsadfs');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (20, 'a1', 'sfsadfssfsadfs', '2019-09-19 13:59:16.613118+07', 'good', '0Y9eodOCjVXZVHGfl5SzeJ58q002', '2019-09-19 13:59:16.613118+07', 'sfsadfssfsadfs');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (21, 'a2', 'sfsadfssfsadfs', '2019-09-19 13:59:22.392067+07', 'good', '0Y9eodOCjVXZVHGfl5SzeJ58q002', '2019-09-19 13:59:22.392067+07', 'sfsadfssfsadfs');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (22, 'tungBoard', 'sfsadfssfsadfs', '2019-09-19 15:25:16.208193+07', 'JUST CREATED', 'wtqfVOHT3cXfZFMHWcRionMa2Q53', '2019-09-19 15:25:16.208193+07', 'sfsadfssfsadfs');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (23, 'tungBoard1', 'sfsadfssfsadfs', '2019-09-19 15:25:24.54212+07', 'JUST CREATED', 'wtqfVOHT3cXfZFMHWcRionMa2Q53', '2019-09-19 15:25:24.54212+07', 'sfsadfssfsadfs');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (24, 'tungBoard1', '0', '2019-09-19 18:13:56.644346+07', 'JUST CREATED', 'pEW0agpxzMewa28Rz4ZgR435Ihb2', '2019-09-19 18:13:56.644346+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (25, 'tungBoard1', '0', '2019-09-20 09:40:29.406854+07', 'JUST CREATED', 'jlUxOFZA4KOmlvSIYtFIWQxAOUo2', '2019-09-20 09:40:29.406854+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (26, 'tungBoard2', '0', '2019-09-20 09:40:33.793179+07', 'JUST CREATED', 'jlUxOFZA4KOmlvSIYtFIWQxAOUo2', '2019-09-20 09:40:33.793179+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (27, 'tungBoard2', '0', '2019-09-20 09:51:18.924262+07', 'JUST CREATED', 'jlUxOFZA4KOmlvSIYtFIWQxAOUo2', '2019-09-20 09:51:18.924262+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (28, 'tungboard1', '0', '2019-09-20 10:15:29.828041+07', 'JUST CREATED', 'jlUxOFZA4KOmlvSIYtFIWQxAOUo2', '2019-09-20 10:15:29.828041+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (29, 'tungboard1', '0', '2019-09-20 10:15:49.212726+07', 'JUST CREATED', 'jlUxOFZA4KOmlvSIYtFIWQxAOUo2', '2019-09-20 10:15:49.212726+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (30, 'tungboard12', '0', '2019-09-20 10:15:52.942631+07', 'JUST CREATED', 'jlUxOFZA4KOmlvSIYtFIWQxAOUo2', '2019-09-20 10:15:52.942631+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (31, 'tungboard123', '0', '2019-09-20 10:15:54.57152+07', 'JUST CREATED', 'jlUxOFZA4KOmlvSIYtFIWQxAOUo2', '2019-09-20 10:15:54.57152+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (32, 'tungboard1', '0', '2019-09-20 10:17:40.365266+07', 'JUST CREATED', 'pdnzp0QYuuacPmHS6e1wV6BxneC3', '2019-09-20 10:17:40.365266+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (33, 'tungboard12', '0', '2019-09-20 10:17:43.197723+07', 'JUST CREATED', 'pdnzp0QYuuacPmHS6e1wV6BxneC3', '2019-09-20 10:17:43.197723+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (34, 'tungboard123', '0', '2019-09-20 10:17:46.126311+07', 'JUST CREATED', 'pdnzp0QYuuacPmHS6e1wV6BxneC3', '2019-09-20 10:17:46.126311+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (35, 'iuouioiuo', '0', '2019-09-20 10:25:37.670581+07', '', 'TsFBroQssjgQxlHt0KV0CSbN8212', '2019-09-20 10:25:37.670581+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (36, 'tungboard1', '0', '2019-09-20 10:39:19.235714+07', 'just created', 'pdnzp0QYuuacPmHS6e1wV6BxneC3', '2019-09-20 10:39:19.235714+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (37, 'tungboard12', '0', '2019-09-20 10:39:22.631345+07', 'just created', 'pdnzp0QYuuacPmHS6e1wV6BxneC3', '2019-09-20 10:39:22.631345+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (38, 'tungboard12', '0', '2019-09-20 10:40:49.861032+07', 'just created', 'zwBK4jjcUHesMzcvA9UqSCpZSl12', '2019-09-20 10:40:49.861032+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (39, 'tungboard123', '0', '2019-09-20 10:40:54.379574+07', 'just created', 'zwBK4jjcUHesMzcvA9UqSCpZSl12', '2019-09-20 10:40:54.379574+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (40, 'test', '0', '2019-09-20 11:13:21.419064+07', 'good', 'pdnzp0QYuuacPmHS6e1wV6BxneC3', '2019-09-20 11:13:21.419064+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (41, 'lololo', '0', '2019-09-20 11:44:43.061636+07', '', 'TsFBroQssjgQxlHt0KV0CSbN8212', '2019-09-20 11:44:43.061636+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (42, 'asdasdasd', '0', '2019-09-20 11:50:35.843371+07', '', 'TsFBroQssjgQxlHt0KV0CSbN8212', '2019-09-20 11:50:35.843371+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (43, 'kl;lk;kl;', '0', '2019-09-20 11:52:26.941383+07', '', 'TsFBroQssjgQxlHt0KV0CSbN8212', '2019-09-20 11:52:26.941383+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (44, 'sdfewrwer', '0', '2019-09-20 11:53:51.148816+07', '', 'TsFBroQssjgQxlHt0KV0CSbN8212', '2019-09-20 11:53:51.148816+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (45, 'yutyutyuty', '0', '2019-09-20 11:55:51.024241+07', '', 'TsFBroQssjgQxlHt0KV0CSbN8212', '2019-09-20 11:55:51.024241+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (46, 'asdasdqwe', '0', '2019-09-20 11:57:48.213721+07', '', 'TsFBroQssjgQxlHt0KV0CSbN8212', '2019-09-20 11:57:48.213721+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (47, 'rtetert', '0', '2019-09-20 11:59:28.010803+07', '', 'TsFBroQssjgQxlHt0KV0CSbN8212', '2019-09-20 11:59:28.010803+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (48, 'tungboard', '0', '2019-09-20 12:09:57.922617+07', 'inprogress', 'HClqRHn9UbUE29QC91NBfzTQm1V2', '2019-09-20 12:09:57.922617+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (49, 'tungboard', '0', '2019-09-20 12:35:12.456466+07', 'donesdas', 'HClqRHn9UbUE29QC91NBfzTQm1V2', '2019-09-20 12:35:12.456466+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (50, 'tungboard', '0', '2019-09-20 13:58:42.110631+07', 'type4', 'v8b03bf6eSZZGRQsMeXeLhLhkGx1', '2019-09-20 13:58:42.110631+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (51, 'newboardName', '0', '2019-09-20 14:01:30.214963+07', 'type3', 'v8b03bf6eSZZGRQsMeXeLhLhkGx1', '2019-09-20 14:01:30.214963+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (52, 'tungboard', 'giaaabaooo@gmail.com', '2019-09-20 15:14:34.927639+07', 'in progress', 'cM2U4jFg73WqVpWwWqiScwjf0Fs1', '2019-09-20 15:14:34.927639+07', 'giaaabaooo@gmail.com');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (53, 'tungboard1', 'giaaabaooo@gmail.com', '2019-09-20 15:16:11.43834+07', 'in progress', 'cM2U4jFg73WqVpWwWqiScwjf0Fs1', '2019-09-20 15:16:11.43834+07', 'giaaabaooo@gmail.com');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (54, 'asdqwe', '0', '2019-09-20 15:45:40.574505+07', 'good', 'kfcp2bMy1LfwywlJe4I0Hh9DXZ42', '2019-09-20 15:45:40.574505+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (55, 'fdgdfgdf', '0', '2019-09-20 17:11:54.604242+07', 'good', 'kfcp2bMy1LfwywlJe4I0Hh9DXZ42', '2019-09-20 17:11:54.604242+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (56, 'dasdasd', '0', '2019-09-20 17:12:43.042519+07', 'good', 'kfcp2bMy1LfwywlJe4I0Hh9DXZ42', '2019-09-20 17:12:43.042519+07', '0');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (58, 'asdaseqweqwe', 'hello gia badm', '2019-09-20 17:19:49.675366+07', 'good', 'osMml3j5adcaxycKjoNSxxqVeqj2', '2019-09-20 17:19:49.675366+07', 'hello gia badm');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (59, 'rwerewr', 'hello gia badm', '2019-09-20 17:20:08.688623+07', 'good', 'osMml3j5adcaxycKjoNSxxqVeqj2', '2019-09-20 17:20:08.688623+07', 'hello gia badm');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (60, 'myboard', 'hieinhoc', '2019-09-20 18:02:30.998596+07', NULL, 'uxh9wjy4OWYYL5XRoh9fIoRxF7D2', '2019-09-20 18:02:30.998596+07', 'hieinhoc');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (61, 'myboard', 'hieinhoc', '2019-09-20 18:02:44.203319+07', NULL, 'uxh9wjy4OWYYL5XRoh9fIoRxF7D2', '2019-09-20 18:02:44.203319+07', 'hieinhoc');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (62, 'qưeqeqw', 'hello gia badm', '2019-09-20 18:17:01.121666+07', 'good', 'osMml3j5adcaxycKjoNSxxqVeqj2', '2019-09-20 18:17:01.121666+07', 'hello gia badm');
INSERT INTO public.board ("boardID", "boardName", "createdBy", "createdAt", status, "userID", "updatedAt", "updatedBy") OVERRIDING SYSTEM VALUE VALUES (63, 'sdafsdaf', 'hello gia badm', '2019-09-23 11:01:32.040705+07', 'good', '3GNWJ1FkcYZ5a4nNkRz4h6eXo1P2', '2019-09-23 11:01:32.040705+07', 'hello gia badm');


--
-- TOC entry 2932 (class 0 OID 16586)
-- Dependencies: 197
-- Data for Name: task; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (1, 'tungTask', 'tungbeo', 'tungbeo', '2019-09-18 09:46:55.188392+07', '2019-09-18 09:46:55.188392+07', '', 2);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (3, 'sdasdasd', '0', '0', '2019-09-18 18:17:07.972524+07', '2019-09-18 18:17:07.972524+07', '', 13);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (4, 'sdasdasd', '0', '0', '2019-09-18 18:17:54.140598+07', '2019-09-18 18:17:54.140598+07', '', 13);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (5, 'sdasdasd', '0', '0', '2019-09-18 18:17:56.721426+07', '2019-09-18 18:17:56.721426+07', '', 13);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (6, 'sdasdasd', '0', '0', '2019-09-18 18:18:48.299837+07', '2019-09-18 18:18:48.299837+07', '', 13);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (7, 'sdasdasd', '0', '0', '2019-09-19 10:41:13.80378+07', '2019-09-19 10:41:13.80378+07', '', 13);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (8, 'tungtask', '0', '0', '2019-09-20 09:53:38.214016+07', '2019-09-20 09:53:38.214016+07', '', 25);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (9, 'tungtask1', '0', '0', '2019-09-20 09:53:44.112195+07', '2019-09-20 09:53:44.112195+07', '', 25);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (10, 'tungtask12', '0', '0', '2019-09-20 09:53:46.607364+07', '2019-09-20 09:53:46.607364+07', '', 25);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (11, 'tungtask12', '0', '0', '2019-09-20 09:54:09.238921+07', '2019-09-20 09:54:09.238921+07', '', 25);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (12, 'tungtask12', '0', '0', '2019-09-20 09:55:00.207868+07', '2019-09-20 09:55:00.207868+07', 'done', 26);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (13, 'tungtask13', '0', '0', '2019-09-20 09:55:05.927471+07', '2019-09-20 09:55:05.927471+07', 'done', 26);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (14, 'tungtask131', '0', '0', '2019-09-20 09:55:13.656265+07', '2019-09-20 09:55:13.656265+07', 'todo', 26);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (15, 'tungtask', '0', '0', '2019-09-20 10:18:41.243233+07', '2019-09-20 10:18:41.243233+07', NULL, 32);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (16, 'tungtask', '0', '0', '2019-09-20 10:22:07.442124+07', '2019-09-20 10:22:07.442124+07', 'ssa', 43);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (17, 'sdasdasd', '0', '0', '2019-09-20 10:22:48.257017+07', '2019-09-20 10:22:48.257017+07', 'good', 13);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (18, 'tungtask', '0', '0', '2019-09-20 10:26:33.156866+07', '2019-09-20 10:26:33.156866+07', 'ssa', 4322);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (19, 'tungtask', '0', '0', '2019-09-20 10:27:37.445891+07', '2019-09-20 10:27:37.445891+07', 'todo', 33);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (20, 'tungtask1', '0', '0', '2019-09-20 10:27:43.173945+07', '2019-09-20 10:27:43.173945+07', 'todo', 33);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (21, 'tungtask12', '0', '0', '2019-09-20 10:27:50.71177+07', '2019-09-20 10:27:50.71177+07', 'done', 33);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (22, 'tungtask123', '0', '0', '2019-09-20 10:28:00.350183+07', '2019-09-20 10:28:00.350183+07', 'inprogress', 33);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (23, 'tungtask1', '0', '0', '2019-09-20 10:41:25.931373+07', '2019-09-20 10:41:25.931373+07', 'todo', 38);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (24, 'tungtask1', '0', '0', '2019-09-20 10:41:30.050468+07', '2019-09-20 10:41:30.050468+07', 'todo', 38);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (25, 'tungtask1', '0', '0', '2019-09-20 10:41:35.138353+07', '2019-09-20 10:41:35.138353+07', 'inprogress', 38);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (26, 'tungtask1', '0', '0', '2019-09-20 10:41:39.103447+07', '2019-09-20 10:41:39.103447+07', 'done', 38);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (27, 'tungtask1', '0', '0', '2019-09-20 10:41:40.7889+07', '2019-09-20 10:41:40.7889+07', 'done', 38);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (28, 'tungtask39', '0', '0', '2019-09-20 10:43:03.117506+07', '2019-09-20 10:43:03.117506+07', 'done', 39);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (29, 'tungtask39', '0', '0', '2019-09-20 10:43:06.047798+07', '2019-09-20 10:43:06.047798+07', 'done', 39);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (30, 'tungtask39', '0', '0', '2019-09-20 10:43:10.320543+07', '2019-09-20 10:43:10.320543+07', 'inprogress', 39);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (31, 'yutyutyu', '0', '0', '2019-09-20 11:55:54.210162+07', '2019-09-20 11:55:54.210162+07', 'good', 13);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (32, 'yutyu567', '0', '0', '2019-09-20 11:55:57.158633+07', '2019-09-20 11:55:57.158633+07', 'good', 13);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (33, 'rtyfhgh', '0', '0', '2019-09-20 11:55:59.424531+07', '2019-09-20 11:55:59.424531+07', 'good', 13);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (34, 'tungtask', '0', '0', '2019-09-20 12:34:14.963051+07', '2019-09-20 12:34:14.963051+07', 'todo', 48);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (35, 'tungtask', '0', '0', '2019-09-20 12:34:16.189091+07', '2019-09-20 12:34:16.189091+07', 'todo', 48);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (36, 'tungtask', '0', '0', '2019-09-20 12:34:22.555514+07', '2019-09-20 12:34:22.555514+07', 'inprogress', 48);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (37, 'tungtask', '0', '0', '2019-09-20 12:34:26.660892+07', '2019-09-20 12:34:26.660892+07', 'done', 48);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (38, 'tungtask', '0', '0', '2019-09-20 12:34:27.778414+07', '2019-09-20 12:34:27.778414+07', 'done', 48);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (39, 'tungtask', '0', '0', '2019-09-20 12:35:50.827625+07', '2019-09-20 12:35:50.827625+07', 'type1', 49);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (40, 'tungtask', '0', '0', '2019-09-20 12:35:53.135008+07', '2019-09-20 12:35:53.135008+07', 'type2', 49);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (41, 'tungtask', '0', '0', '2019-09-20 12:35:55.428967+07', '2019-09-20 12:35:55.428967+07', 'type3', 49);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (42, 'tungtask', '0', '0', '2019-09-20 12:35:56.708428+07', '2019-09-20 12:35:56.708428+07', 'type3', 49);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (43, 'tungtask', '0', '0', '2019-09-20 12:35:57.435043+07', '2019-09-20 12:35:57.435043+07', 'type3', 49);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (44, 'tungtask', '0', '0', '2019-09-20 12:35:59.911121+07', '2019-09-20 12:35:59.911121+07', 'type4', 49);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (45, 'tungtask', '0', '0', '2019-09-20 12:36:00.6735+07', '2019-09-20 12:36:00.6735+07', 'type4', 49);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (46, 'taskName', '0', '0', '2019-09-20 14:00:34.937996+07', '2019-09-20 14:00:34.937996+07', 'type1', 50);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (47, 'taskName', '0', '0', '2019-09-20 14:00:36.529781+07', '2019-09-20 14:00:36.529781+07', 'type1', 50);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (48, 'taskName', '0', '0', '2019-09-20 14:00:40.514532+07', '2019-09-20 14:00:40.514532+07', 'type2', 50);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (49, 'taskName', '0', '0', '2019-09-20 14:00:42.715386+07', '2019-09-20 14:00:42.715386+07', 'type3', 50);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (50, 'taskName', '0', '0', '2019-09-20 14:00:44.615559+07', '2019-09-20 14:00:44.615559+07', 'type3', 50);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (51, 'name', '0', '0', '2019-09-20 14:01:47.151167+07', '2019-09-20 14:01:47.151167+07', 'todo', 51);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (52, 'name', '0', '0', '2019-09-20 14:01:48.011123+07', '2019-09-20 14:01:48.011123+07', 'todo', 51);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (53, 'name', '0', '0', '2019-09-20 14:01:51.818033+07', '2019-09-20 14:01:51.818033+07', 'done', 51);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (54, 'name', '0', '0', '2019-09-20 14:01:52.577583+07', '2019-09-20 14:01:52.577583+07', 'done', 51);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (55, 'name', '0', '0', '2019-09-20 14:01:53.302405+07', '2019-09-20 14:01:53.302405+07', 'done', 51);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (56, 'name', '0', '0', '2019-09-20 14:01:58.351176+07', '2019-09-20 14:01:58.351176+07', 'in progress', 51);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (57, 'name', '0', '0', '2019-09-20 14:01:59.19825+07', '2019-09-20 14:01:59.19825+07', 'in progress', 51);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (58, 'name', '0', '0', '2019-09-20 14:02:03.74297+07', '2019-09-20 14:02:03.74297+07', 'in progress', 51);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (59, 'first', 'giaaabaooo@gmail.com', 'giaaabaooo@gmail.com', '2019-09-20 15:20:39.323699+07', '2019-09-20 15:20:39.323699+07', 'in progress', 51);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (62, 'mytask', 'hieinhoc', 'hieinhoc', '2019-09-20 18:03:46.963749+07', '2019-09-20 18:03:46.963749+07', 'done', 60);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (63, 'mytask', 'hieinhoc', 'hieinhoc', '2019-09-20 18:03:54.792953+07', '2019-09-20 18:03:54.792953+07', 'inprogress', 60);
INSERT INTO public.task ("taskID", "taskName", "createdBy", "updatedBy", "createdAt", "updatedAt", status, "boardID") OVERRIDING SYSTEM VALUE VALUES (61, 'mytask', 'hieinhoc', 'hieinhoc', '2019-09-20 18:03:45.856716+07', '2019-09-20 18:03:45.856716+07', 'todo', 60);


--
-- TOC entry 2933 (class 0 OID 16594)
-- Dependencies: 198
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('BercvAHMEIUGO5kYvizB9EETpUE3', 'tung1@gmail.com', NULL, NULL, NULL, NULL, NULL, '2019-09-17 17:54:28.01912+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('4ngHyrZtcoblJbdgrnoQ8sqhqeE3', 'tung2@gmail.com', 'tung', 'beo', NULL, NULL, NULL, '2019-09-18 09:41:26.708507+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('s9lbrVH0wvVuE0Dko4VcTZWOknf2', 'test3@gmail.com', 'sfsadfs', 'sfsadfs', 'sfsadfs', 'sfsadfs', 'sfsadfs', '2019-09-18 11:16:50.994266+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('cfMwmGPnoZNlfz6pbspO4WmYi7r1', 'test4@gmail.com', 'sfsadfs', 'sfsadfs', 'sfsadfs', 'sfsadfs', 'sfsadfs', '2019-09-18 11:30:51.006776+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('oIDC22T6HgTSvxKOGg1LhK00rT52', 'ban@g.com', 'sfsadfs', 'sfsadfs', 'sfsadfs', 'sfsadfs', 'sfsadfs', '2019-09-18 11:36:56.673118+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('b7Jb9PzcVLWSNLTTTRZEDp6f92a2', 'kill@gmail.com', 'An', 'Truong', '0968344544', '03/02/2019', 'nolink.com', '2019-09-18 11:58:45.97195+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('KgIfikPizybDN3TUB5sfUKwndIo1', 'cc@gmail.com', NULL, NULL, '541515456', 'asjbdhja', 'adghjgqe', '2019-09-18 13:37:35.01982+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('OjS9UC8g6BcNjqSTcu1M1mwQ6XD3', 'hieusql@gmail.com', 'hiei', 'nhoc', NULL, NULL, NULL, '2019-09-18 14:21:24.060062+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('xiBFWe8OUadqG92m04bYFonGFp83', 'hieukfc@gmail.com', 'hiei', 'nhoc', NULL, NULL, NULL, '2019-09-18 14:29:41.107785+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('5fxGYg2tIsRlR1nmeEdrXebTqeF3', 'loliloli@gmail.com', NULL, NULL, '0', '', '', '2019-09-18 14:36:50.89569+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('ucrNs2OuiQgslCx3t8og5l7MuNg1', 'eddie@g.com', 'sfsadfs', 'sfsadfs', 'sfsadfs', 'sfsadfs', 'sfsadfs', '2019-09-18 15:28:58.206162+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('YWWdZQXZOHTO7sydOtzAeOEMGmc2', 'a10@gmail.com', NULL, NULL, '0', '', '', '2019-09-18 16:20:39.418362+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('5M4jdwwkBmbSHebH23HzI7PgwqU2', 'a11@gmail.com', NULL, NULL, '0', '', '', '2019-09-18 16:21:26.882051+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('Z1XZPuDRUASnCQiuktnuWZrsQiI2', 'giii@gmail.com', NULL, NULL, '0', '', '', '2019-09-19 09:42:52.737102+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('GAkm5VoA2zSA8pR8my22iVKe84O2', 'test@g.com', 'sfsadfs', 'sfsadfs', 'sfsadfs', 'sfsadfs', 'sfsadfs', '2019-09-19 12:06:57.857672+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('0Y9eodOCjVXZVHGfl5SzeJ58q002', 'g@gmail.com', 'sfsadfs', 'sfsadfs', 'sfsadfs', 'sfsadfs', 'sfsadfs', '2019-09-19 13:59:06.412913+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('wtqfVOHT3cXfZFMHWcRionMa2Q53', 'tung1@g.com', 'sfsadfs', 'sfsadfs', 'sfsadfs', 'sfsadfs', 'sfsadfs', '2019-09-19 15:24:43.611994+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('FkaSmLQk2zczKDxY1z3IauNWIFw1', 'test1@g.com', NULL, NULL, '0', '', '', '2019-09-19 15:52:37.546312+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('HmpuDjdm69RWheYCv1DSKUri1803', 'test2@g.com', NULL, NULL, '0', '', '', '2019-09-19 17:49:40.559958+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('pEW0agpxzMewa28Rz4ZgR435Ihb2', 'tung1@g.com', NULL, NULL, '0', '', '', '2019-09-19 18:04:43.959872+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('jlUxOFZA4KOmlvSIYtFIWQxAOUo2', 'huhu@gmail.com', NULL, NULL, NULL, NULL, NULL, '2019-09-20 09:39:59.141275+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('pdnzp0QYuuacPmHS6e1wV6BxneC3', 'ban@g.com', NULL, NULL, '0', '', '', '2019-09-20 09:40:41.954289+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('lG2nvScXoiZkqQER4fruBfUE2Am1', 'hit@gmail.com', 'An', 'Truong', '0968344544', '03/02/2019', 'nolink.com', '2019-09-20 09:46:31.962964+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('3hFOumDQVMhzu81G2gUhvNAkAjJ2', 'huhuhaha@gmail.com', NULL, NULL, NULL, NULL, NULL, '2019-09-20 10:06:59.336687+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('TsFBroQssjgQxlHt0KV0CSbN8212', 'a1@gmail.com', NULL, NULL, '0', '', '', '2019-09-20 10:17:19.937042+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('zwBK4jjcUHesMzcvA9UqSCpZSl12', 'tung1@gmail.com', NULL, NULL, '0', '', '', '2019-09-20 10:40:31.749956+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('yrx6QmEubKQcQJVsoxUGv0lFvtI2', 'giaabaoo@gmail.com', NULL, NULL, NULL, NULL, NULL, '2019-09-20 11:27:59.679144+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('t0AMpQU1IUcWglnVwZdSHsfPI9f2', 'giaaabaooo@gmail.com', NULL, NULL, NULL, NULL, NULL, '2019-09-20 11:29:24.983889+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('wPg9AlWmT8T865d7R95MuzIsKVB2', 'huhy@gmail.com', NULL, NULL, NULL, NULL, NULL, '2019-09-20 12:05:30.443229+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('HClqRHn9UbUE29QC91NBfzTQm1V2', 'tung2@gmail.com', NULL, NULL, '', '', '', '2019-09-20 12:09:30.025944+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('48bsCOBzlAa2esiSuavLzKCVRss2', 'bao1@g.com', NULL, NULL, '', '', '', '2019-09-20 12:11:34.154865+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('Vzd5wuL2VTXqFaCSongKWJQMBrR2', 'baohihi@gmail.com', NULL, NULL, NULL, NULL, NULL, '2019-09-20 13:46:26.635587+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('d256jwQ36bZgYf2TICQZANiLfpV2', 'bao2@g.com', NULL, NULL, '', '', '', '2019-09-20 13:46:44.234867+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('6seIZxuXMIPmTQWaKRf8AAbtZAC3', 'aloalo@gmail.com', NULL, NULL, NULL, NULL, NULL, '2019-09-20 13:56:12.544415+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('v8b03bf6eSZZGRQsMeXeLhLhkGx1', 'tung2@g.com', NULL, NULL, '', '', '', '2019-09-20 13:56:28.822596+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('21zvDCeWZdflzz2s3lSiZ4GjiJz2', 'aaaa@g.com', NULL, NULL, NULL, NULL, NULL, '2019-09-20 14:12:43.836838+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('jHQeN4X6p7PYdMXsoi2orVREFfO2', 'bao3@g.com', NULL, NULL, '', '', '', '2019-09-20 14:22:57.783751+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('kfcp2bMy1LfwywlJe4I0Hh9DXZ42', 'a1@gmail.com', NULL, NULL, '0', '', '', '2019-09-20 14:23:26.778176+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('sJnTsCGM4ocrPyBSmpHdUQyME0v1', 'hjju@g.com', 'giaaabaooo', '@gmail.com', '123456', '2/8/1999', 'asdsadsa', '2019-09-20 14:26:26.574718+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('MGf4K6KwCebeXcdpO9ZiJnKLcmF2', 'bao4@g.com', NULL, NULL, '', '', '', '2019-09-20 14:27:26.069253+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('cl4BF9icpocKwHavMsi9z1IIL3w1', 'ban1@g.com', NULL, NULL, '', '', '', '2019-09-20 14:49:43.211607+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('hjKE7ULuF8UAEvJMayeiavm0m5i2', 'pop@gmail.com', 'An', 'Truong', '0968344544', '03/02/2019', 'nolink.com', '2019-09-20 14:54:00.888926+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('cM2U4jFg73WqVpWwWqiScwjf0Fs1', 'tungheo123@g.com', 'giaaabaooo', '@gmail.com', '123456', '2/8/1999', 'asdsadsa', '2019-09-20 15:09:14.391022+07', '', NULL);
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('osMml3j5adcaxycKjoNSxxqVeqj2', 'a2@gmail.com', 'hello gia ba', 'dm', '', '', '', '2019-09-20 17:13:44.212673+07', '', 'user');
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('uxh9wjy4OWYYL5XRoh9fIoRxF7D2', 'hello22@gmail.com', 'hiei', 'nhoc', NULL, NULL, NULL, '2019-09-20 17:37:55.886804+07', '', 'user');
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('tLMNTXHj2hOgprWAsKJAhbZuWJ32', 'test@8g.com', 'hello gia ba', 'dm', '', '', '', '2019-09-23 10:57:19.993945+07', '', 'user');
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('3GNWJ1FkcYZ5a4nNkRz4h6eXo1P2', 'test@9g.com', 'hello gia ba', 'dm', '', '', '', '2019-09-23 10:59:08.806677+07', '', 'user');
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('s01b6WVs7ROmwYhWSlm19H3nYYf2', 'test@1g.com', 'hello gia ba', 'dm', '', '', '', '2019-09-23 11:21:41.561379+07', '', 'user');
INSERT INTO public."user" ("userID", email, "firstName", "lastName", "userPhone", "birthDay", "avatarURL", "updatedAt", status, "typeUser") VALUES ('ad73fXJ6Pxee8B8BlkyLXVIaQ8h1', 'test@2g.com', 'hello gia ba', 'dm', '', '', '', '2019-09-23 11:46:25.350636+07', '', 'user');


--
-- TOC entry 2944 (class 0 OID 0)
-- Dependencies: 199
-- Name: board_boardID_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."board_boardID_seq"', 63, true);


--
-- TOC entry 2945 (class 0 OID 0)
-- Dependencies: 200
-- Name: task_taskID_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."task_taskID_seq"', 64, true);


--
-- TOC entry 2805 (class 2606 OID 16585)
-- Name: board board_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.board
    ADD CONSTRAINT board_pkey PRIMARY KEY ("boardID");


--
-- TOC entry 2807 (class 2606 OID 16593)
-- Name: task task_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.task
    ADD CONSTRAINT task_pkey PRIMARY KEY ("taskID");


--
-- TOC entry 2809 (class 2606 OID 16601)
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY ("userID");


-- Completed on 2019-09-23 11:52:37 +07

--
-- PostgreSQL database dump complete
--

