class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :author_id, null: false
      t.integer :parent_comment_id
      t.text :body, null: false
      t.integer :event_id, null: false

      t.timestamps null: false
    end
    add_index :comments, :author_id
    add_index :comments, :event_id
    add_index :comments, :parent_comment_id
  end
end
