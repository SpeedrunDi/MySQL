create database if not exists news_portal;

use news_portal;

create table news (
  id int not null auto_increment primary key,
  title varchar(255) not null,
  description text not null,
  image varchar(255) null,
  datetime datetime not null
);

create table messages (
  id int not null auto_increment primary key,
  new_id int not null,
  author varchar(20) null,
  message varchar(1000) not null,
  constraint messages_news_id_fk
    foreign key (new_id) references news(id)
    on UPDATE restrict on delete cascade
);

insert  into news (title, description, image, datetime)
values ('Мебель', 'Мягкие и удобные кресла', null, '2022-09-01 01:38:15');

insert into messages (new_id, author, message)
values (1, 'new', 'test'),
       (1, null , 'Место где люди играют или сидят в соцсетях');

select * from news;