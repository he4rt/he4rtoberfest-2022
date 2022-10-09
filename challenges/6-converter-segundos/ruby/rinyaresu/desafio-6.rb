# frozen_string_literal: true

require 'minitest/autorun'
require 'minitest/pride'

class Time
  def initialize(seconds)
    @seconds = seconds
  end

  def to_time
    hours = @seconds / 3600
    minutes = (@seconds % 3600) / 60
    seconds = (@seconds % 3600) % 60

    "#{hours.to_s.rjust(2, '0')}:#{minutes.to_s.rjust(2, '0')}:#{seconds.to_s.rjust(2, '0')}"
  end
end

seconds = gets.to_i
puts Time.new(seconds).to_time

class TimeTest < Minitest::Test
  def test_time
    assert_equal '02:07:30', Time.new(7650).to_time
    assert_equal '01:36:40', Time.new(5800).to_time
  end
end
