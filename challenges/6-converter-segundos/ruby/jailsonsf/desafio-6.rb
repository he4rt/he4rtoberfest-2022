seconds_to_convert = ARGV.map(&:to_i)[0]

seconds = seconds_to_convert % 60

minutes_to_convert = (seconds_to_convert / 60).floor
minutes = minutes_to_convert % 60

hours = (minutes_to_convert / 60).floor

puts "#{format('%.2i', hours)}:#{format('%.2i', minutes)}:#{format('%.2i', seconds)}"
