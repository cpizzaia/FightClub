class AddPaperclipToGroups < ActiveRecord::Migration
  def change
    remove_column :groups, :image, :string
    add_attachment :groups, :group_img
  end
end
