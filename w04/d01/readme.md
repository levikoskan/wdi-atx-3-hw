## Never Ending Story

Oh no, we have a recursive story! Open `never_ending_story.rb` and do the following:

* Write a program that prints out a story line, and then prompts:
    * **"Should we continue? (y/n)"**
    * If "n", use `break` to exit.
    * If "y", print the next line of the story.
* Do this indefinitely until the user chooses to stop. 
* Loop the story back to the beginning when you run out of story lines!




puts story[0]

story.each do |story_line| 
    puts "do we continue? (y/n)"
        continue = gets.chomp
        continue.downcase!

    next if continue == "y"
    break if continue == "n"
    redo 
end


