class InfiniteScroll extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <FlatList contentContainerStyle={{
                                             flex: 1,
                                             flexDirection: 'column',
                                             height: '100%',
                                             width: '100%'
                                            }}
                      data={this.state.data}
                      keyExtractor={item => item.id.toString()}
                      renderItem={({ item }) => (
                                                <View style={{
                                                             marginTop: 25,
                                                             width: '50%'
                                                            }}
                                                >
                                                    <CardItem name={item.name} 
                                                              description = {item.description} 
                                                              imageUrl={item.image_url}
                                                              navigation = {this.props.navigation} />
                                                </View>
                                                )
                                }
                      onEndReached={this._handleLoadMore}
                      onEndReachedThreshold={0.5}
                      initialNumToRender={10}
            />
        )
    }

}