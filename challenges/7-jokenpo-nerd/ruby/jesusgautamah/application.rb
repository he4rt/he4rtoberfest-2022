# frozen_string_literal: true

require_relative 'jokenpo_manager'

# The main class to execute the jokenpo game
module Application
  class << self
    def run(times)
      @times = times
      run_in_times
    rescue StandardError
      puts 'Something went wrong'
    end

    private

    attr_reader :times

    def run_in_times
      JokenpoManager.new.run_in_times(times)
    end
  end
end

Application.run(ARGV[0].to_i)