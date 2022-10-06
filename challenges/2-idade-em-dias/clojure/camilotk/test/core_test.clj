(ns core-test
  (:require
    [clojure.test :refer :all]
    [core :refer :all]))


(deftest converte-teste
  (testing "Testando se está sendo convertido corretamente."
    (is (= (converte 800) {:anos 2 :meses 2 :dias 10}))
    (is (= (converte 400) {:anos 1 :meses 1 :dias 5}))
    (is (= (converte 30) {:anos 0 :meses 1 :dias 0}))))
