(ns app.text
  (:require-macros [app.content :as ac])
  (:require [app.state :as state]))

(def text-lookup {:en {:sabong-guide-content (ac/en-sabong-md)
                       :civara-guide-content (ac/en-civara-md)
                       :sanghati-guide-content (ac/en-sanghati-md)
                       :borders-content (ac/en-borders-md)
                       :tools-content (ac/en-tools-md)
                       :dyeing-content (ac/en-dyeing-md)
                       :home-content (ac/en-home-md)
                       :robe-size-note (ac/en-robe-size-note-md)
                       :home "Home"
                       :robe-sewing "Robe Sewing"
                       :sabong "Sabong"
                       :civara "Civara"
                       :sanghati "Sanghati"
                       :borders "Borders"
                       :tools "Tools"
                       :dyeing "Dyeing"
                       :pattern "Pattern"
                       :notes "Notes"
                       :download-pdf "Download PDF"
                       :guide "Guide"
                       :title "Title"
                       :final-width "Final width"
                       :final-height "Final height"
                       :shrinking-width-percent "Shrinking width percent"
                       :shrinking-height-percent "Shrinking height percent"
                       :kusi-width "Kusi width"
                       :border "Border"
                       :cutting-buffer "Cutting buffer"
                       :vertical-cutting-buffer "Vertical cutting buffer"
                       }

                  :th {:sabong-guide-content (ac/th-sabong-md)
                       :civara-guide-content (ac/th-civara-md)
                       :sanghati-guide-content (ac/th-sanghati-md)
                       :borders-content (ac/th-borders-md)
                       :tools-content (ac/th-tools-md)
                       :dyeing-content (ac/th-dyeing-md)
                       :home-content (ac/th-home-md)
                       :robe-size-note (ac/th-robe-size-note-md)
                       :home "โปรแกรมคำนวณ"
                       :robe-sewing "การตัดเย็บไตรจีวร"
                       :sabong "สบง"
                       :civara "จีวร"
                       :sanghati "สังฆาฏิ"
                       :borders "อนุวาต"
                       :tools "อุปกรณ์ที่ใช้"
                       :dyeing "Dyeing"
                       :pattern "แบบในการขีด"
                       :notes "ข้อควรสังเกต"
                       :download-pdf "ดาวน์โหลด PDF"
                       :guide "คำอธิบาย"
                       :title "ชื่องานผ้า"
                       :final-width "ความกว้างที่ต้องการ"
                       :final-height "ความสูงที่ต้องการ"
                       :shrinking-width-percent "เปอร์เซ็นต์การหดด้านกว้าง"
                       :shrinking-height-percent "เปอร์เซ็นต์การหดด้านสูง"
                       :kusi-width "ขนาดกุสิ"
                       :border "ขนาดอนุวาต"
                       :cutting-buffer "ค่าพับเย็บอนุวาต"
                       :vertical-cutting-buffer "เผื่อเพื่อขลิบ"
                       }})

(defn text [key]
  (let [lang (get-in @state/state [:params :lang])]
    (get-in text-lookup [lang key])))
