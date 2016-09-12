class User < ApplicationRecord
  has_many :links

  validates :email, presence: true
  validates :password, presence: true
  validates :email, uniqueness: true

  has_secure_password
end
