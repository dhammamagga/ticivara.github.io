(ns app.text
  (:require-macros [app.content :as ac])
  (:require [app.state :as state]))

(def en-robe-size-note-md "
The final size is reached when the cloth shrinks after the first washing. The
total cut size is scaled up to account for shrinking. The kusi size is not
changed for easier marking, the extra size is added by increasing only the
border and the mandala.

Units are in centimeters. On the pattern, fractions are rounded to millimeters
only when displayed, the internal calculations don't round the values.

Use the increasing width values along the edges for marking on the cloth, this
will not accumulate errors from rounding.
")

(def th-robe-size-note-md "
ขนาดผ้าไตรจีวร ที่ต้องการ

จะปรากฏตรงนี้

ต้องรออับเดท
")

(def text-lookup {:en {:sabong-guide-content (ac/en-sabong-md)
                       :civara-guide-content (ac/en-civara-md)
                       :sanghati-guide-content (ac/en-sanghati-md)
                       :borders-content (ac/en-borders-md)
                       :tools-content (ac/en-tools-md)
                       :home-content (ac/en-home-md)
                       :robe-size-note en-robe-size-note-md
                       :home "Home"
                       :robe-sewing "Robe Sewing"
                       :sabong "Sabong"
                       :civara "Civara"
                       :sanghati "Sanghati"
                       :borders "Borders"
                       :tools "Tools"
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
                       :home-content (ac/th-home-md)
                       :robe-size-note th-robe-size-note-md
                       :home "โปรแกรมคำนวณ"
                       :robe-sewing "การตัดเย็บผ้าไตรจีวร"
                       :sabong "สบง"
                       :civara "จีวร"
                       :sanghati "สังฆาฏิ"
                       :borders "อนุวาต"
                       :tools "เครื่องมือ"
                       :pattern "แบบในการขีด"
                       :notes "Notes"
                       :download-pdf "ดาวน์โหลด PDF"
                       :guide "คำอธิบาย"
                       :title "หัวข้อ"
                       :final-width "ความกว้างที่ต้องการ"
                       :final-height "ความสูงที่ต้องการ"
                       :shrinking-width-percent "เปอร์เซ็นต์การหดของผ้าด้านกว้าง"
                       :shrinking-height-percent "เปอร์เซ็นต์การหดของผ้าด้านสูง"
                       :kusi-width "ขนาดกุสิ"
                       :border "ขนาดอนุวาต"
                       :cutting-buffer "ขนาดเผื่อการตัดเย็บ"
                       :vertical-cutting-buffer "Vertical cutting buffer"
                       }})

(defn text [key]
  (let [lang (get-in @state/state [:params :lang])]
    (get-in text-lookup [lang key])))
