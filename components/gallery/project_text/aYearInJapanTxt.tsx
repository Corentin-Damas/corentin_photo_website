import React from "react";
import styles from "../../gallery/InfosBubble.module.css";

function YearInJapanTxt() {
  return (
    <div className={`${styles.popUpInformation} ${styles.open}`}>
      <p className={styles.popUpInformation_txt}>
        01 - In 2016 after university i wanted to study japanese a long time
        dream i had from my childhood where i could ear the japanses language
        throught Tv, Anime, games Song. I remember that during late
        middle-school and high-school everyday before going to school i was
        speeding to eat my breakfast to be able to watch the TV at least 20min.
        During this time there was a little TV channel that was diffusing random
        Japanese songs every morning and i really like the sound of it.
      </p>
      <p className={styles.popUpInformation_txt}>
        02 - Even before that i watched on my father computer different animes
        that just came out like One-piece, Bleach, Naruto and so on in original
        soundtrack subtitle in french or english; With my cousine we always had
        some game of Pokemon and Zelda togheter. But my very first animation
        movie that make me fall in love for the japanese animation style was
        Princess Mononoke. I guess it was this acumulation of this little thing
        that get me to travel to live in Japan from October 2016 and January
        2018.
      </p>
    </div>
  );
}

export default YearInJapanTxt;
