import React from 'react';
import {Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {PostType} from '../../components/Post/Post.types';

const data: PostType[] = [
  {
    id: 1,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 2,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: 'The first Blender Open Movie from 2006',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 3,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 4,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 5,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 6,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 7,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 8,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 9,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 10,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
    there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
    uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
    shape of a full tank of good times.',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 11,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 12,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: 'The first Blender Open Movie from 2006',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 13,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 14,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 15,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 16,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 17,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 18,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 19,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 20,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
    there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
    uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
    shape of a full tank of good times.',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 21,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 22,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: 'The first Blender Open Movie from 2006',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 23,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 24,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 25,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 26,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 27,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 28,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 29,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 30,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
    there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
    uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
    shape of a full tank of good times.',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 31,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 32,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: 'The first Blender Open Movie from 2006',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 33,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 34,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 35,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 36,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 37,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 38,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 39,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 40,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
    there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
    uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
    shape of a full tank of good times.',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 41,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 42,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: 'The first Blender Open Movie from 2006',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 43,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 44,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 45,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 46,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 47,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 48,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 49,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 50,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
    there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
    uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
    shape of a full tank of good times.',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 51,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 52,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: 'The first Blender Open Movie from 2006',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 53,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 54,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 55,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 56,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 57,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 58,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 59,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 60,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
    there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
    uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
    shape of a full tank of good times.',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 61,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 62,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: 'The first Blender Open Movie from 2006',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 63,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 64,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 65,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 66,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 67,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 68,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 69,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 70,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
    there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
    uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
    shape of a full tank of good times.',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 71,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 72,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: 'The first Blender Open Movie from 2006',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 73,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 74,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 75,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 76,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 77,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 78,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 79,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 80,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
    there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
    uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
    shape of a full tank of good times.',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 81,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 82,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: 'The first Blender Open Movie from 2006',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 83,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 84,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 85,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 86,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 87,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 88,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 89,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 90,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
    there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
    uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
    shape of a full tank of good times.',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 91,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 92,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: 'The first Blender Open Movie from 2006',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 93,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 94,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 95,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 96,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 97,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 98,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 99,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 100,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
    there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
    uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
    shape of a full tank of good times.',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 101,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 102,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: 'The first Blender Open Movie from 2006',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 103,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 104,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 105,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 106,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 107,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 108,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 109,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 110,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
    there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
    uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
    shape of a full tank of good times.',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 111,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 112,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: 'The first Blender Open Movie from 2006',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 113,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 114,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 115,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 116,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 117,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 118,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 119,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </Text>
    ),
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
  {
    id: 120,
    video: {
      source: {
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      },
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
      autoplay: true,
      disableControlsWhen: {default: true, fullscreen: true},
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
    there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
    uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
    shape of a full tank of good times.',
    actionsContent: (
      <>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </>
    ),
  },
];
export default data;
