class CreateUsersEvents < ActiveRecord::Migration
  def change
    create_table :users_events do |t|
      t.integer :event_id, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
    add_index :users_events, :user_id
    add_index :users_events, :event_id
  end
end
