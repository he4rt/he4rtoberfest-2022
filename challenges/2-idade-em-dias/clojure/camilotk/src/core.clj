(ns core)


(defn converte
  "Converte um determinado número de dias para periodos."
  [dias]
  {:anos (int (/ dias 365))
   :meses (int (-> (rem dias 365) (/ 30)))
   :dias (int (-> (rem dias 365) (rem 30)))})


(defn -main
  "Função main."
  [& args]
  (if (some? args)
    (def dias (Integer/parseInt (first args)))
    (def dias
      (do (print "Dias: ")
          (flush)
          (Integer/parseInt (read-line)))))

  (let [anos (:anos (converte dias))
        meses (:meses (converte dias))
        dias-restantes (:dias (converte dias))]

    (println (str anos " ano(s)\n" meses " mese(s)\n" dias-restantes " dia(s)")))
  :ok)
