# frozen_string_literal: true

require_relative 'seconds_to_hours'

# The main class to execute the conversion of seconds to hours
module Application
  class << self
    def run(seconds)
      @seconds = seconds
      convert
    end

    private

    attr_reader :seconds

    def convert
      SecondsToHours.convert(seconds)
    end
  end
end

puts Application.run(ARGV[0].to_i)

