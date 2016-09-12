require 'rails_helper'

RSpec.feature "User cannot create new link" do
  xscenario "they try to create link without title" do
    user1 = User.create(email: "test", password: "password")
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user1)

    visit links_path
    fill_in "Url", with: "https://www.google.com"
    click_button("Submit Link")

    expect(page).to have_content "Title can't be blank"
  end
end
