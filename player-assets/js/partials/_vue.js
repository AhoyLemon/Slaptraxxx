var app = new Vue({
  el: '#app',
  data: {
    h1: 'It works.',
    audioSrc: null,
    current: {
      num: -1,
      title: null,
      hour: null,
      subject: null,
      page: null,
      background: null,
      textColor: null,
      textAnimation: null,
      previousGradient: null,
      gradientOpacity: 0,

      gradients: [
        { 
          light: null,
          dark: null
        },
        { 
          light: null,
          dark: null
        },
      ]

    },
    paused: false,
    currentTrack: 0,
    songs: [
      {
        file: '1 - Theme.mp3',
        title: 'The Garbage Day 2020 Theme',
        hour:  1,
        subject: "Ezine Articles",
        page: "https://thefpl.us/episode/garbage-day-2020-1"
      },
      {
        file: '2 - Perfect Love.mp3',
        title: '(33M) + (22F) = Perfect Love',
        hour:  2,
        subject: "A R/eturn to r/relationships",
        page: "https://thefpl.us/episode/garbage-day-2020-1"
      },
      {
        file: '3 - Farts.mp3',
        title: 'Farts',
        hour:  3,
        subject: "Fart Fetishists",
        page: "https://thefpl.us/episode/garbage-day-2020-1"
      },
      {
        file: '4 - Great Things In Your Future.mp3',
        title: 'Great Things In Your Future',
        hour:  4,
        subject: "Psychic Bitch",
        page: "https://thefpl.us/episode/garbage-day-2020-1"
      },
      {
        file: '5 - Pooner & The Snizz - KQHF.mp3',
        title: 'Pooner & The Snizz On KQHF 99.9',
        hour:  5,
        subject: "Pooner & The Snizz",
        page: "https://thefpl.us/episode/garbage-day-2020-1"
      },
      {
        file: '6 - Monster Girls Fuckin.mp3',
        title: 'Monster Girls, Fuckin',
        hour:  6,
        subject: "The Monster Girl Encyclopedia",
        page: "https://thefpl.us/episode/garbage-day-2020-1"
      },
      {
        file: '7 - Gargle.mp3',
        title: 'GARGLE!',
        hour:  7,
        subject: "Water School",
        page: "https://thefpl.us/episode/garbage-day-2020-2"
      },
      {
        file: '8 - Rap Pad (Still Bad).mp3',
        title: "Rap Pad (Still Bad)",
        hour:  8,
        subject: "Enter The Rap Pad",
        page: "https://thefpl.us/episode/garbage-day-2020-2"
      },
      {
        file: '9 - wikiHow 1.mp3',
        title: "wikiHow The Game Show Theme",
        hour:  9,
        subject: "wikiHow The Game Show (Round 1)",
        page: "https://thefpl.us/episode/garbage-day-2020-2"
      },
      {
        file: '10 - Jack Chick.mp3',
        title: "Boots Briefly Delays Jack Chick's Suffering",
        hour:  10,
        subject: "Jack Chick's Porno Poetry Prison",
        page: "https://thefpl.us/episode/garbage-day-2020-2"
      },
      {
        file: '11 - Veganism.mp3',
        title: "Veganism Doesn't Make You Better At Mario Party",
        hour:  11,
        subject: "Veggie Boards",
        page: "https://thefpl.us/episode/garbage-day-2020-2"

      },
      {
        file: '12 - This Song Shouldnt Have Been Written.mp3',
        title: "This Song Shouldn't Have Been Written",
        hour:  12,
        subject: "Acne Lovers",
        page: "https://thefpl.us/episode/garbage-day-2020-2"
        
      },
      {
        file: '13 - Spookydolls.mp3',
        title: "Spookydolls",
        hour:  13,
        subject: "Haunted Dolls On Etsy",
        page: "https://thefpl.us/episode/garbage-day-2020-3"
      },
      {
        file: '14 - Hey Guys.mp3',
        title: "Hey Guys",
        hour:  14,
        subject: "The Daniel Songer Comedy Hour",
        page: "https://thefpl.us/episode/garbage-day-2020-3"
      },
      {
        file: '15 - Its All Just Buttons.mp3',
        title: "It's All Just Buttons",
        hour:  15,
        subject: "FreezeRay Poetry",
        page: "https://thefpl.us/episode/garbage-day-2020-3"
      },
      {
        file: '16 - Pressed Against Her Quivering Mound.mp3',
        title: "Pressed Against Her Quivering Mound",
        hour:  16,
        subject: "Historical Erotic Roleplay",
        page: "https://thefpl.us/episode/garbage-day-2020-3"
      },
      {
        file: '17 - Cheeseburger In Purgatory.mp3',
        title: "Cheeseburger In Purgatory",
        hour:  17,
        subject: "Cardiophiles",
        page: "https://thefpl.us/episode/garbage-day-2020-3"
      },
      {
        file: '18 - Hitting Refresh On The Pokemon Generator.mp3',
        title: "Hitting Refresh On The Pokemon Generator",
        hour:  18,
        subject: "Elizabeth Storybook",
        page: "https://thefpl.us/episode/garbage-day-2020-3"
      },
      {
        file: '19 - Put All That Shit In A Bowl.mp3',
        title: "Put All That Shit In A Bowl",
        hour:  19,
        subject: "Recipes From Instructables",
        page: "https://thefpl.us/episode/garbage-day-2020-4"
      },
      {
        file: "20 - Hunt Purple.mp3",
        title: "Hunt Purple",
        hour:  20,
        subject: "Let's Kill Barney",
        page: "https://thefpl.us/episode/garbage-day-2020-4"
      },
      {
        file: "21 - Suck.mp3",
        title: "Suck",
        hour:  21,
        subject: "Autofellatio",
        page: "https://thefpl.us/episode/garbage-day-2020-4"
      },
      {
        file: "22 - Thirdeyesight.mp3",
        title: "Thirdeyesight",
        hour:  22,
        subject: "A Spiritual Journey",
        page: "https://thefpl.us/episode/garbage-day-2020-4"
      },
      {
        file: "23 - wikiHow 2.mp3",
        title: "wikiHow The Game Show Theme ft. Kumquatxop",
        hour:  23,
        subject: "wikiHow The Home Game (Championship Edition)",
        page: "https://thefpl.us/episode/garbage-day-2020-4"
      },
      {
        file: "24 - Cow Dick.mp3",
        title: "Cow Dick",
        hour:  24,
        subject: "The Final Hour",
        page: "https://thefpl.us/episode/garbage-day-2020-4"
      },
      {
        file: '5 - Pooner & The Snizz - KLAP.mp3',
        title: 'Pooner & The Snizz On KLAP 102.9',
        bonus: true
      },
      {
        file: 'BONUS - SnizzBop.mp3',
        title: 'MmmBop - Pooner & The Snizz $5k Remix',
        bonus: true
      },
      {
        file: 'JW Friedman - No Dignity.mp3',
        title: 'J. W. Friedman: No Dignity',
        bonus: true,
        byline: '(a moody cover of Blackstreet&apos;s "No Diggity" by <a href="https://www.idontevenownatelevision.com" target="_blank">J. W. Friedman</a>)'
      }
    ],
    colors: [
      { light: "#f6e58d", dark: "#f9ca24" }, // yellow
      { light: "#ffbe76", dark: "#f0932b" }, // orange
      { light: "#ff7979", dark: "#eb4d4b" }, // red
      { light: "#7ed6df", dark: "#22a6b3" }, // cyan
      { light: "#e056fd", dark: "#be2edd" }, // purple
      { light: "#686de0", dark: "#4834d4" }, // blue
      { light: "#30336b", dark: "#130f40" }, // dark navy
      { light: "#95afc0", dark: "#535c68" }, // grey
      { light: "#ffdde1", dark: "#ee9ca7" }, // light pink
      { light: "#b91d73", dark: "#b91d73" }, // magenta
      { light: "#91EAE4", dark: "#7F7FD5" }, // azure
      { light: "#f5af19", dark: "#f12711" }, // red -> orange
      { light: "#ED213A", dark: "#93291E" }, // red
      { light: "#6FB1FC", dark: "#0052D4" }, // lagoon
      { light: "#DA22FF", dark: "#9733EE" }, // purple
      { light: "#ec38bc", dark: "#7303c0" }, // purple -> pink
      { light: "#AA076B", dark: "#61045F" }, // purples
      { light: "#F09819", dark: "#FF512F" }, // green -> yellow
    ],
    previousColors: -1
  },

  methods: {
    playSong(i) {
      let self = this;
      let song = self.songs[i];
      self.audioSrc = 'Music Files/' + song.file;
      self.current.num = i+1;
      self.current.title = song.title;
      self.current.subject = song.subject;
      self.current.hour = song.hour;
      self.current.page = song.page;
      self.current.byline = song.byline;
      self.newColor();
      document.getElementById('AudioElement').play();
    },

    stopSong() {
      let self = this;
      document.getElementById('AudioElement').pause();
      document.getElementById('AudioElement').currentTime = 0;
    },

    newColor() {
      let self = this;
      let r = randomNumber(0,self.colors.length);
      if (r == self.previousColors) {
        self.newColor();
      } else {
        self.previousColors = r;
        self.current.gradients.unshift({ light: self.colors[r].light, dark: self.colors[r].dark });
        self.fadeInNewColor();
      }
    },

    fadeInNewColor() {
      let self = this;
      self.current.gradientOpacity = 0;

      function moreOpaque() {
        self.current.gradientOpacity += 0.04;
        if (self.current.gradientOpacity >= 1) {
          clearInterval(handle);
          self.current.gradientOpacity = 1;
        }
      }
      var handle = setInterval(moreOpaque, 20);
    }
  },

  computed: {
    playing() { return document.getElementById('AudioElement').paused; },

    currentGradient() {
      let self = this;
      return "radial-gradient(" + self.current.gradients[0].light + ", " + self.current.gradients[0].dark + ")";
    },

    previousGradient() {
      let self = this;
      return "radial-gradient(" + self.current.gradients[1].light + ", " + self.current.gradients[1].dark + ")";
    }

  },

  mounted: function() {
    let self = this;
    document.getElementById('AudioElement').onended = function() {
      self.playSong(self.current.num);
    };

  }

});
