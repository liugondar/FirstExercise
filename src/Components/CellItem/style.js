import Colors from '../../Styles/Colors';

export default {
  container: {
    padding: 5,
    margin: 5,
    borderRadius: 5,
    borderColor: Colors.steel,
    borderStyle: 'solid',
    borderWidth: 1
  },
  header: {
    flexDirection: 'row',
    flex: 2,
    borderBottomWidth: 1,
    borderColor: Colors.steel
  },
  body: {
    flexDirection: 'row',
    flex: 6,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: Colors.steel
  },
  footer: {
    flexDirection: 'row',
    flex: 1,
    padding: 10
  },
  headerLeft: {
    flex: 3,
    borderRightWidth: 1,
    borderColor: Colors.steel
  },
  headerMiddle: {
    marginLeft: 10,
    flex: 6
  },
  headerRight: {
    flex: 3
  },
  headerMiddleTitle: {
    flex: 3
  },
  headerMiddleDescription: {
    flex: 2
  }
};
