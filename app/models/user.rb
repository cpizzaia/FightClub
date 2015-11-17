class User < ActiveRecord::Base
  validates :useremail, :password_digest, :session_token, presence: true, uniqueness: true
  validates :name, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password
  after_initialize :generate_session_token

  has_many(
    :groups_led,
    class_name: "Group",
    foreign_key: :organizer_id,
    primary_key: :id
  )

  def self.find_by_credentials(useremail, password)
    user = User.find_by_useremail(useremail)
    return nil if user.nil?
    if user.is_password?(password)
      user
    else
      nil
    end
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def generate_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end
end
