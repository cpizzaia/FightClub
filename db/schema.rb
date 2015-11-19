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

ActiveRecord::Schema.define(version: 20151119003202) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

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
    t.string   "title",        null: false
    t.integer  "organizer_id", null: false
    t.text     "description",  null: false
    t.string   "image",        null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "useremail",                null: false
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

  create_table "users_groups", force: :cascade do |t|
    t.integer  "group_id",   null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "users_groups", ["group_id"], name: "index_users_groups_on_group_id", using: :btree
  add_index "users_groups", ["user_id"], name: "index_users_groups_on_user_id", using: :btree

end
