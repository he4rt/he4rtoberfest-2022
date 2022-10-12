(ns core)


(def cobaias (atom {:coelhos 0 :ratos 0 :sapos 0 :total 0}))


(defn atualiza-total!
  "Recebe um valor e um simbolo que representa qual cobaia e atualiza o atom acumulando valor e total."
  [valor simbolo]
  (cond
    (= simbolo "R") (do (swap! cobaias update-in [:ratos] #(+ valor %))
                        (swap! cobaias update-in [:total] #(+ valor %)))

    (= simbolo "C") (do (swap! cobaias update-in [:coelhos] #(+ valor %))
                        (swap! cobaias update-in [:total] #(+ valor %)))

    (= simbolo "S") (do (swap! cobaias update-in [:sapos] #(+ valor %))
                        (swap! cobaias update-in [:total] #(+ valor %)))))


(defn percentagem
  [valor total]
  (double (/ (* valor 100) total)))


(defn resposta!
  []
  (assoc @cobaias :percentagem-coelhos (percentagem (:coelhos @cobaias) (:total @cobaias)) :percentagem-sapos (percentagem (:sapos @cobaias) (:total @cobaias)) :percentagem-ratos (percentagem (:ratos @cobaias) (:total @cobaias))))


(defn -main
  "Função main."
  [& args]
  (.print (System/out) "N: ")
  (def numero (Integer/parseInt (read-line)))
  (flush)

  (loop [numero-interacoes numero
         entrada (clojure.string/split (read-line) #"\s")
         i 0]

    (atualiza-total! (Integer/parseInt (first entrada)) (second entrada))

    (if (>= (inc i) numero-interacoes)
      :ok
      (recur numero-interacoes (clojure.string/split (read-line) #"\s") (inc i))))

  (def resultado (resposta!))

  (println (str "Total: " (:total resultado) " cobaias.\n" "Total de coelhos: "
                (:coelhos resultado) "\n" "Total de ratos: " (:ratos resultado)
                "\n" "Total de sapos: " (:sapos resultado) "\n" "Percentual de coelhos: "
                (:percentagem-coelhos resultado) " %\n" "Percentual de ratos: "
                (:percentagem-ratos resultado) " %\n" "Percentual de sapos: "
                (:percentagem-sapos resultado) " %"))
  :ok)
