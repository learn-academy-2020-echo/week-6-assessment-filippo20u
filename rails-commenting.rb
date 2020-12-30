# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# 1) define the name of my controller "BlogPosts" generated using rails 
class BlogPostsController < ApplicationController
  def index
    # 2) define a variable to show all the posts of my blog
    @posts = BlogPost.all
  end

  def show
    # 3) show a blog post with the params :id called
    @post = BlogPost.find(params[:id])
  end

  # 4) method required to render a form to create a new post
  def new
    @post = Post.new
  end

  def create
    # 5)  define a method to call the ruby action to create a new instance in my database, it's needed in addtion to the method "new"
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # 6) code to update an attribute defined in line 41
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 7) if the destroy command doesn't work, it will redirect to the blog post that the user is trying to delete
      redirect_to blog_post_path(@post)
    end
  end

  # 8) it protects the code below line 62 from being called outside of the controller
  private
  def blog_post_params
    # 9) syntax of strong params, require it set a requrement parameter to be passed to create or update a blog post, permit indicates the attributes allowed to be created
    params.require(:blog_post).permit(:title, :content)
  end

end


# FILE: app/models/blog_post.rb

class BlogPost < ApplicationRecord
  # 10) it creates the association between the model BlogPost and the Comments model with its foreign key.
  has_many :comments
end
