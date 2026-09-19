import type { Cause } from '@/lib/types';
import { cureInternational } from './cure-international';
import { waterMission } from './water-mission';
import { bibleLeagueInternational } from './bible-league-international';
import { epicChurchHopeProject } from './epic-church-hope-project';
import { voiceOfTheMartyrs } from './voice-of-the-martyrs';
import { christianAidMission } from './christian-aid-mission';
import { jesusFilmProject } from './jesus-film-project';
import { theTimothyInitiative } from './the-timothy-initiative';
import { homeOfHopeMinistries } from './home-of-hope-ministries';
import { the500k } from './the500k';
import { heartForAfrica } from './heart-for-africa';
import { pearlHouse } from './pearl-house';

/**
 * The directory. One file per cause in this folder, assembled here.
 *
 * Read `DATA.md` before editing. The short version: every number needs a
 * `sourceId`, quotes are verbatim, and a gap goes in `notVerified` rather than
 * getting filled in with a guess.
 *
 * Order in this array does not matter — the UI sorts by review depth or by cost,
 * never by position.
 */
export const causes: Cause[] = [
  cureInternational,
  waterMission,
  bibleLeagueInternational,
  epicChurchHopeProject,
  voiceOfTheMartyrs,
  christianAidMission,
  jesusFilmProject,
  theTimothyInitiative,
  homeOfHopeMinistries,
  the500k,
  heartForAfrica,
  pearlHouse,
];

export function causeBySlug(slug: string): Cause {
  const cause = causes.find((c) => c.slug === slug);
  if (!cause) throw new Error(`No cause with slug "${slug}"`);
  return cause;
}
