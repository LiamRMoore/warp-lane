-- Table: public.REQUESTEDTRACKMODIFICATIONS

-- DROP TABLE public.REQUESTEDTRACKMODIFICATIONS;

CREATE TABLE public.REQUESTEDTRACKMODIFICATIONS
(
    requestedtrackmodificationid serial,
    unmodifiedtrackid integer NOT NULL,
    modifyinguserid integer NOT NULL,
    jsonconfig json,
    datemodified timestamp,
    datecreated timestamp default current_timestamp,
    CONSTRAINT requestedtrackmodifications_pk PRIMARY KEY (requestedtrackmodificationid),
    CONSTRAINT "REQUESTEDTRACKMODIFICATIONS_UNMODIFIEDTRACKS_FK" FOREIGN KEY (unmodifiedtrackid)
        REFERENCES public.unmodifiedtracks (unmodifiedtrackid) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT "REQUESTEDTRACKMODIFICATIONS_USERS_FK" FOREIGN KEY (modifyinguserid)
        REFERENCES public.users (userid) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE public.REQUESTEDTRACKMODIFICATIONS
    OWNER to admin;
-- Index: fki_REQUESTEDTRACKMODIFICATIONS_UNMODIFIEDTRACKS_FK

-- DROP INDEX public."fki_REQUESTEDTRACKMODIFICATIONS_UNMODIFIEDTRACKS_FK";

CREATE INDEX "fki_REQUESTEDTRACKMODIFICATIONS_UNMODIFIEDTRACKS_FK"
    ON public.REQUESTEDTRACKMODIFICATIONS USING btree
    (unmodifiedtrackid ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: fki_REQUESTEDTRACKMODIFICATIONS_USERS_FK

-- DROP INDEX public."fki_REQUESTEDTRACKMODIFICATIONS_USERS_FK";

CREATE INDEX "fki_REQUESTEDTRACKMODIFICATIONS_USERS_FK"
    ON public.REQUESTEDTRACKMODIFICATIONS USING btree
    (modifyinguserid ASC NULLS LAST)
    TABLESPACE pg_default;