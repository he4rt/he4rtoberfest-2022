# frozen_string_literal: true

# Class to convert seconds to hours
module SecondsToHours
  class << self
    def convert(seconds)
      hours = seconds / 3600
      minutes = (seconds % 3600) / 60
      seconds = (seconds % 3600) % 60
      "#{hours}:#{minutes}:#{seconds}"
    end
  end
end
