class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.datetime "start_time",  null: false
      t.datetime "end_time"
      t.string   "title",       null: false
      t.text     "description", null: false
      t.integer  "group_id",    null: false
      t.string   "address",     null: false
      t.float    "lat"
      t.float    "lng"
      t.timestamps null: false
    end
    add_index :events, :group_id
  end
end
