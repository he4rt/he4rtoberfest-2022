(ns core
  (:import
    java.util.concurrent.TimeUnit))


(defn -main
  "Função main. "
  [& args]

  (if (some? args)
    (def segundos (Integer/parseInt (first args)))
    (do (.print (System/out) "Numero: ")
        (flush)
        (def segundos (Integer/parseInt (read-line)))))

  (def horas (. TimeUnit/SECONDS toHours segundos))
  (def minutos (- (. TimeUnit/SECONDS toMinutes segundos) (* horas 60)))
  (def segundos-restantes (Math/round (double (rem (- (. TimeUnit/SECONDS toSeconds segundos) (* minutos 60)) 60))))

  (printf "%02d:%02d:%02d" horas minutos segundos-restantes)

  :ok)
