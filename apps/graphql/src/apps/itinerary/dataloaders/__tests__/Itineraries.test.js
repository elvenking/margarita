// @flow

import { parseParameters as parseItineraryParameters } from '../Itinerary';
import { parseParameters, parseParametersNew } from '../Itineraries';

const searchParams = {
  travelFrom: ['OSL'],
  travelTo: ['PRG'],
  dateFrom: new Date('2018-01-01'),
};

const searchParamsNew = {
  order: 'DESC',
  sort: 'QUALITY',
  passengers: {
    adults: 1,
    children: 0,
    infants: 0,
  },
  itinerary: {
    origin: {
      slug: ['prague-czechia'],
      ids: ['prague_cz'],
    },
    destination: {
      slug: null,
      ids: ['STN'],
    },
    outboundDate: {
      start: new Date('2019-05-01'),
      end: new Date('2019-05-03'),
    },
  },
};

it('parses parameters correctly', () => {
  expect(parseParameters(searchParams)).toMatchInlineSnapshot(`
Object {
  "curr": "EUR",
  "dateFrom": "01/01/2018",
  "dateTo": "01/01/2018",
  "flyFrom": "OSL",
  "to": "PRG",
}
`);
  expect(
    parseParameters({
      ...searchParams,
      returnDateFrom: new Date('2018-01-02'),
      returnDateTo: new Date('2018-01-02'),
      passengers: {
        adults: 2,
      },
    }),
  ).toMatchInlineSnapshot(`
Object {
  "adults": 2,
  "children": 0,
  "curr": "EUR",
  "dateFrom": "01/01/2018",
  "dateTo": "01/01/2018",
  "flyFrom": "OSL",
  "infants": 0,
  "returnFrom": "02/01/2018",
  "returnTo": "02/01/2018",
  "to": "PRG",
}
`);
});

it('parses validity parameters corectly', () => {
  const token = 'token';
  expect(
    parseItineraryParameters({
      bookingToken: token,
      bags: 1,
      passengers: {
        adults: 2,
        children: 1,
        infants: 1,
      },
    }),
  ).toMatchObject({
    booking_token: token,
    bnum: 1,
    pnum: 4,
  });
  expect(
    parseItineraryParameters({
      bookingToken: token,
      bags: 1,
      passengers: {
        adults: 1,
      },
    }),
  ).toMatchObject({
    booking_token: token,
    bnum: 1,
    pnum: 1,
  });
});

it('parses new parameters correctly', () => {
  expect(parseParametersNew(searchParamsNew)).toMatchInlineSnapshot(`
Object {
  "adults": 1,
  "asc": 0,
  "children": 0,
  "curr": "EUR",
  "dateFrom": "01/05/2019",
  "dateTo": "03/05/2019",
  "flyFrom": "prague_cz",
  "infants": 0,
  "sort": "quality",
  "to": "STN",
}
`);
});
