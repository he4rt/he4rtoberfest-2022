# frozen_string_literal: true

# Class to convert seconds to hours
module SecondsToHours
  class << self
    def convert(seconds)
      @hours = seconds / 3600
      @minutes = (seconds % 3600) / 60
      @seconds = (seconds % 3600) % 60
      format
    end

    private

    attr_reader :hours, :minutes, :seconds

    def format
      "#{hours.to_s.rjust(2, '0')}:#{minutes.to_s.rjust(2, '0')}:#{seconds.to_s.rjust(2, '0')}"
    end
  end
end
