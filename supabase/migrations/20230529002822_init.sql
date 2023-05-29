create table categories
(
    id         serial primary key,
    name       varchar(256)                                                  not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table images
(
    id         serial primary key,
    category_id    bigint references categories (id)                                  not null,
    url        text                                                          not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create
    extension if not exists moddatetime schema extensions;

create trigger
    handle_updated_at
    before update
    on categories
    for each row execute
    procedure moddatetime(updated_at);

create trigger
    handle_updated_at
    before update
    on images
    for each row execute
    procedure moddatetime(updated_at);

create
    policy "Enable all for authenticated users only" on "public"."categories"
    as permissive for all
    to authenticated
    using (true)
    with check (true);

create
    policy "Enable read access for all users" on "public"."categories"
    as permissive for
    select
    to public
    using (true);

create
    policy "Enable all for authenticated users only" on "public"."images"
    as permissive for all
    to authenticated
    using (true)
    with check (true);

create
    policy "Enable read access for all users" on "public"."images"
    as permissive for
    select
    to public
    using (true);