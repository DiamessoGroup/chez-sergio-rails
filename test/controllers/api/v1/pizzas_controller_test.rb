require "test_helper"

class Api::V1::PizzasControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end
  #
  test "should get index" do
    get api_v1_cart_items_url, as: :json
    assert_response :success
  end
end
