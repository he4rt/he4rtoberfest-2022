(ns core-test
  (:require
    [clojure.test :refer :all]
    [core :refer :all]))

(deftest fizz-buzz-test
  (testing "se há o correto retorno da função."
    (is (= (fizz-buzz 5) "buzz"))
    (is (= (fizz-buzz 6) "fizz"))
    (is (= (fizz-buzz 15) "fizzbuzz"))
    (is (= (fizz-buzz 11) 11))))
