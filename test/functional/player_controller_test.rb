require 'test_helper'

class PlayerControllerTest < ActionController::TestCase
      
  context "show action" do
    context "for valid album" do
      should "render show template" do
        Album.any_instance.stubs(:find_by_mb_id).returns(Factory(:album))
        get :show, :mb_id => "2777d044-7de8-4a3f-b8ec-aef5cae22d1a"
        assert_template 'show'
      end
    end
  end

  context "retrieve_videos" do
    setup do
      xhr :get, :retrieve_videos
    end
    should assign_to(:other_youtube_videos)
    should render_template(:retrieve_videos)
  end
end

