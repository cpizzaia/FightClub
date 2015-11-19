class AddPaperclipToUsers < ActiveRecord::Migration
  def change
    remove_column :users, :profile_img_url, :string
    add_attachment :users, :profile_img
  end
end
