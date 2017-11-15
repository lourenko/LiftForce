name=mine
# Themes: cbc, simple, serif, blood, simula, solarized, beigesmall, darkgray,
# sky, moon, beige, night
doconce format html $name --encoding=utf-8             \
                          --css=slidesize.css          \
                          --pygments_html_style=autumn \
                          --keep_pygments_html_bg      \
                          --html_style=blueish         \
                          --html_video_autoplay=on     \
                          #-DUT                         \
                          #--html_DOCTYPE               \
                          --html_bootstrap_navbar=off \
                          #--html_bootstrap_jumbotron=off \
                          SLIDE_TYPE=reveal            \
                          SLIDE_THEME=blood
#doconce split_html $name --nav_buttontop+bottom --pagination

doconce slides_html $name reveal --html_footer_logo=utfpr \
                                 --html_slide_theme=sky
doconce replace 'width: 1170' 'width: 1280' $name.html
doconce replace 'height: 700' 'height: 768' $name.html
doconce replace '.png" width=110%' '.png" width=200' $name.html

