/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SegmentStopInfo_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Segment_data$ref: FragmentReference;
export type Segment_data = {|
  +duration: ?number,
  +arrival: ?{|
    +$fragmentRefs: SegmentStopInfo_data$ref
  |},
  +departure: ?{|
    +time: ?{|
      +local: ?any
    |},
    +$fragmentRefs: SegmentStopInfo_data$ref,
  |},
  +transporter: ?{|
    +name: ?string
  |},
  +$refType: Segment_data$ref,
|};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "FragmentSpread",
  "name": "SegmentStopInfo_data",
  "args": null
};
return {
  "kind": "Fragment",
  "name": "Segment_data",
  "type": "Segment",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "duration",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "arrival",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "departure",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "time",
          "storageKey": null,
          "args": null,
          "concreteType": "DateType",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "local",
              "args": null,
              "storageKey": null
            }
          ]
        },
        (v0/*: any*/)
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "transporter",
      "storageKey": null,
      "args": null,
      "concreteType": "Transporter",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c5127c7f82540f62875447ca704eee4c';
module.exports = node;
