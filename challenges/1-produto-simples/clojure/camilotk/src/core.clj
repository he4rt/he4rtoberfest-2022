(ns core)

(defn ler-numero!
  "Lê um numero do console."
  []
  (print "Digite um número: ")
  (flush)
  (Integer/parseInt (read-line)))

(defn -main
  "Função Main - entrada da aplicação"
  [& args]

  (if (= args nil)
    (do (def primeiro (ler-numero!))
        (def segundo (ler-numero!)))
    (do (def primeiro (Integer/parseInt (first args)))
        (def segundo (Integer/parseInt (second args)))))

  (printf "PROD = %d\n" (* primeiro segundo))
  :ok)


