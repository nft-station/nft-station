import ld from 'lodash';

function omitBy_Nil(obj: any) {
  return ld.omitBy(obj, ld.isNil);
}

export { omitBy_Nil };
