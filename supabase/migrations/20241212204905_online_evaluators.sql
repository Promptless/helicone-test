create table "public"."online_evaluators" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "evaluator" uuid not null,
    "config" jsonb,
    "organization" uuid not null
);


alter table "public"."online_evaluators" enable row level security;

CREATE UNIQUE INDEX online_evaluators_pkey ON public.online_evaluators USING btree (id);

alter table "public"."online_evaluators" add constraint "online_evaluators_pkey" PRIMARY KEY using index "online_evaluators_pkey";

alter table "public"."online_evaluators" add constraint "public_online_evaluators_evaluator_fkey" FOREIGN KEY (evaluator) REFERENCES evaluator(id) not valid;

alter table "public"."online_evaluators" validate constraint "public_online_evaluators_evaluator_fkey";

alter table "public"."online_evaluators" add constraint "public_online_evaluators_organization_fkey" FOREIGN KEY (organization) REFERENCES organization(id) not valid;

alter table "public"."online_evaluators" validate constraint "public_online_evaluators_organization_fkey";

grant delete on table "public"."online_evaluators" to "anon";

grant insert on table "public"."online_evaluators" to "anon";

grant references on table "public"."online_evaluators" to "anon";

grant select on table "public"."online_evaluators" to "anon";

grant trigger on table "public"."online_evaluators" to "anon";

grant truncate on table "public"."online_evaluators" to "anon";

grant update on table "public"."online_evaluators" to "anon";

grant delete on table "public"."online_evaluators" to "authenticated";

grant insert on table "public"."online_evaluators" to "authenticated";

grant references on table "public"."online_evaluators" to "authenticated";

grant select on table "public"."online_evaluators" to "authenticated";

grant trigger on table "public"."online_evaluators" to "authenticated";

grant truncate on table "public"."online_evaluators" to "authenticated";

grant update on table "public"."online_evaluators" to "authenticated";

grant delete on table "public"."online_evaluators" to "service_role";

grant insert on table "public"."online_evaluators" to "service_role";

grant references on table "public"."online_evaluators" to "service_role";

grant select on table "public"."online_evaluators" to "service_role";

grant trigger on table "public"."online_evaluators" to "service_role";

grant truncate on table "public"."online_evaluators" to "service_role";

grant update on table "public"."online_evaluators" to "service_role";


