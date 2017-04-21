class User < ApplicationRecord

  before_create :generate_token

  private

  def generate_token
    self.token = SecureRandom.hex

    while User.find_by(token: token )
      self.token = SecureRandom.hex
    end
  end
end
