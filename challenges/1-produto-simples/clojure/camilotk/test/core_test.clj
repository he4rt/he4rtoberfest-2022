(ns core-test
  (:require
    [clojure.test :refer :all]
    [core :refer :all]))


(deftest is-it-works?
  (is (= (-main "10" "20") :ok)))
