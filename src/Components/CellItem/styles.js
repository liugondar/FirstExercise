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
    height: 60,
    borderBottomWidth: 1,
    paddingLeft: 10,
    borderColor: Colors.steel
  },
  headerLeft: {
    width: 70
  },
  headerAvatar: {
    width: 50,
    height: 50
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
  },

  body: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: Colors.steel
  },
  thumbnailImage: {
    width: null,
    height: null,
    flex: 1
  },

  footer: {
    flexDirection: 'row',
    height: 40,
    padding: 5
  },
  cellButton: {
    backgroundColor: Colors.silver,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 3,
    borderColor: Colors.violet
  },
  textButton: {
    color: Colors.violet
  }
};
