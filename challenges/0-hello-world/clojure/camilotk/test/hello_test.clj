(ns hello-test
  (:require
    [clojure.test :refer :all]
    [hello :as h]))


(deftest is-it-ok?
  (is (= (h/-main) :ok)))


