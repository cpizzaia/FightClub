# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151220232451) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer  "author_id",         null: false
    t.integer  "parent_comment_id"
    t.text     "body",              null: false
    t.integer  "event_id"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  add_index "comments", ["author_id"], name: "index_comments_on_author_id", using: :btree
  add_index "comments", ["event_id"], name: "index_comments_on_event_id", using: :btree
  add_index "comments", ["parent_comment_id"], name: "index_comments_on_parent_comment_id", using: :btree

  create_table "events", force: :cascade do |t|
    t.datetime "start_time",  null: false
    t.datetime "end_time"
    t.string   "title",       null: false
    t.text     "description", null: false
    t.integer  "group_id",    null: false
    t.string   "address",     null: false
    t.float    "lat"
    t.float    "lng"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "events", ["group_id"], name: "index_events_on_group_id", using: :btree

  create_table "groups", force: :cascade do |t|
    t.string   "title",                                      null: false
    t.integer  "organizer_id",                               null: false
    t.text     "description",                                null: false
    t.datetime "created_at",                                 null: false
    t.datetime "updated_at",                                 null: false
    t.string   "city",                                       null: false
    t.string   "state",                                      null: false
    t.string   "group_img_file_name"
    t.string   "group_img_content_type"
    t.integer  "group_img_file_size"
    t.datetime "group_img_updated_at"
    t.string   "member_noun",            default: "Members", null: false
  end

  add_index "groups", ["organizer_id"], name: "index_groups_on_organizer_id", using: :btree

  create_table "pg_search_documents", force: :cascade do |t|
    t.text     "content"
    t.integer  "searchable_id"
    t.string   "searchable_type"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "pg_search_documents", ["searchable_type", "searchable_id"], name: "index_pg_search_documents_on_searchable_type_and_searchable_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                    null: false
    t.string   "name",                     null: false
    t.string   "password_digest",          null: false
    t.string   "session_token",            null: false
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
    t.string   "profile_img_file_name"
    t.string   "profile_img_content_type"
    t.integer  "profile_img_file_size"
    t.datetime "profile_img_updated_at"
  end

  create_table "users_events", force: :cascade do |t|
    t.integer  "event_id",   null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "users_events", ["event_id"], name: "index_users_events_on_event_id", using: :btree
  add_index "users_events", ["user_id"], name: "index_users_events_on_user_id", using: :btree

  create_table "users_groups", force: :cascade do |t|
    t.integer  "group_id",   null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "users_groups", ["group_id"], name: "index_users_groups_on_group_id", using: :btree
  add_index "users_groups", ["user_id"], name: "index_users_groups_on_user_id", using: :btree

end
