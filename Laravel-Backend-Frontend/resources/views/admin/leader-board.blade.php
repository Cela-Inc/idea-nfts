<div>
    <div class="table_top">
        <div class="filter_panel">
            <div class="form-group row">
                <div class="col-sm-6 text-black mb-2">
                    <input type="text" class="form-control btn border " wire:model="searchColumns.title"
                        placeholder="Find Project" />
                    <!-- <a href="#" class="btn btn-outline-secondary"></a> -->
                </div>
                <div class="col-sm-6 mb-2">
                    <a href="#" class="btn border btn-outline-success text-black">Filter</a>
                </div>
            </div>

        </div>
        <div>
            {{ $projects->links('pagination::bootstrap-4') }}
        </div>
        <!-- <div class="carousel slide slider_btn" data-bs-ride="carousel">
           <a href="#" class="carousel-control-prev slider_next"><img src="image/pre_slider.png"></a>
           <a href="#" class="carousel-control-next slider_next"><img src="image/next_slider.png"></a>
        </div> -->
    </div>

    <div class="info_table table-responsive">
        <table class="table table-striped">
            <thead class="table_header">
                <tr>
                    <th wire:click="sortByColumn('title')" class="cursor">
                        IDEAs
                        @if ($sortColumn == 'title')
                            <i class="fa fa-fw fa-sort-{{ $sortDirection }}"></i>
                        @else
                            <i class="fa fa-fw fa-sort" style="color:#DCDCDC"></i>
                        @endif
                    </th>
                    <th wire:click="sortByColumn('track')" class="cursor">
                        Track
                        @if ($sortColumn == 'track')
                            <i class="fa fa-fw fa-sort-{{ $sortDirection }}"></i>
                        @else
                            <i class="fa fa-fw fa-sort" style="color:#DCDCDC"></i>
                        @endif
                    </th>
                    <th wire:click="sortByColumn('types')" class="cursor">
                        Type
                        @if ($sortColumn == 'types')
                            <i class="fa fa-fw fa-sort-{{ $sortDirection }}"></i>
                        @else
                            <i class="fa fa-fw fa-sort" style="color:#DCDCDC"></i>
                        @endif
                    </th>
                    <th wire:click="sortByColumn('owners')" class="cursor">
                        Owners
                        @if ($sortColumn == 'owners')
                            <i class="fa fa-fw fa-sort-{{ $sortDirection }}"></i>
                        @else
                            <i class="fa fa-fw fa-sort" style="color:#DCDCDC"></i>
                        @endif
                    </th>
                    <th wire:click="sortByColumn('items')" class="cursor">
                        Items
                        @if ($sortColumn == 'items')
                            <i class="fa fa-fw fa-sort-{{ $sortDirection }}"></i>
                        @else
                            <i class="fa fa-fw fa-sort" style="color:#DCDCDC"></i>
                        @endif
                    </th>
                    <th> Chains </th>
                    <th>Community</th>
                </tr>
            </thead>
            <tbody class="table_containt">
                @forelse ($projects as $project)
                    <tr>
                        <th scope="row"><img src="{{ $project->coverImagePath() }}" width="36"> <a
                                style="text-decoration: none; color: black;" class="leaderboard-href"
                                href="/project/{{ $project->slug }}">
                                {{ $project->title ?? 'N/a' }}
                            </a></th>
                        <td>{{ $project->track ?? '' }}</td>
                        <td>{{ $project->types ?? '' }}</td>
                        <td>{{ number_format($project->owners ?? 0) }}</td>
                        <td>{{ number_format($project->items ?? 0) }}</td>
                        <td>
                            @if ($project->ethereum == 1)
                                <img class="me-2" width="16" src="{{ asset('assets/img/chains/ethereum.svg') }}">
                            @endif
                            @if ($project->polygon == 1)
                                <img class="me-2" width="16" src="{{ asset('assets/img/chains/polygon.svg') }}">
                            @endif
                            @if ($project->avalanche == 1)
                                <img class="me-2" width="16"
                                    src="{{ asset('assets/img/chains/avalanche.svg') }}">
                            @endif
                            @if ($project->fantom == 1)
                                <img class="me-2" width="16" src="{{ asset('assets/img/chains/fantom.svg') }}">
                            @endif
                            @if ($project->arbitrum == 1)
                                <img class="me-2" width="16" src="{{ asset('assets/img/chains/arbitrum.png') }}">
                            @endif
                            @if ($project->optimism == 1)
                                <img class="me-2" width="16" src="{{ asset('assets/img/chains/optimism.svg') }}">
                            @endif
                        </td>
                        <td>
                            <a href="{{ $project->discord ?? '#' }}"><img src="{{ asset('image/share.png') }}"></a>
                            <a href="{{ $project->twitter ?? '#' }}"><img src="{{ asset('image/twitter.png') }}"></a>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="8">No projects found.</td>
                    </tr>
                @endforelse
            </tbody>
        </table>

        <!-- <table class="table table-striped">
            <thead class="table_header">
               <tr>
                   <th scope="col">IDEAs</th>
                   <th scope="col">Type</th>
                   <th scope="col">24h Vol</th>
                   <th scope="col">Total Vol</th>
                   <th scope="col">Owners</th>
                   <th scope="col">Items</th>
                   <th scope="col">Community</th>
                </tr>
            </thead>
            <tbody class="table_containt">
                <tr>
                  <th scope="row"><img src="image/img_01.png">Humanity Rocks</th>
                  <td>Charity, Gaming</td>
                  <td>356,021</td>
                  <td>654,152</td>
                  <td>1,458</td>
                  <td>235,020</td>
                  <td>
                  <a href="#"><img src="image/share.png"></a>
                  <a href="#"><img src="image/twitter.png"></a>
                  </td>
                </tr>
                <tr>
                  <th scope="row"><img src="image/img_02.png">Helix Auto</th>
                  <td>Gaming</td>
                  <td>356,021</td>
                  <td>654,152</td>
                  <td>1,458</td>
                  <td>235,020</td>
                  <td><a href="#"><img src="image/share.png"></a>
                  <a href="#"><img src="image/twitter.png"></a></td>
                </tr>
                <tr>
                  <th scope="row"><img src="image/img_03.png">PIMLR</th>
                  <td>Philosophy, Scie...</td>
                  <td>356,021</td>
                  <td>654,152</td>
                  <td>1,458</td>
                  <td>235,020</td>
                  <td><a href="#"><img src="image/share.png"></a>
                  <a href="#"><img src="image/twitter.png"></a></td>
                </tr>
                <tr>
                  <th scope="row"><img src="image/img_04.png">Save the environment</th>
                  <td>Charity</td>
                  <td>356,021</td>
                  <td>654,152</td>
                  <td>1,458</td>
                  <td>235,020</td>
                  <td><a href="#"><img src="image/share.png"></a>
                  <a href="#"><img src="image/twitter.png"></a></td>
                </tr><tr>
                  <th scope="row"><img src="image/img_05.png">MetAvatars Universal</th>
                  <td>Metaverse, Gami...</td>
                  <td>356,021</td>
                  <td>654,152</td>
                  <td>1,458</td>
                  <td>235,020</td>
                  <td><a href="#"><img src="image/share.png"></a>
                  <a href="#"><img src="image/twitter.png"></a></td>
                </tr><tr>
                  <th scope="row"><img src="image/img_06.png">Roman Reloded</th>
                  <td>Art</td>
                  <td>356,021</td>
                  <td>654,152</td>
                  <td>1,458</td>
                  <td>235,020</td>
                  <td><a href="#"><img src="image/share.png"></a>
                  <a href="#"><img src="image/twitter.png"></a></td>
                </tr><tr>
                  <th scope="row"><img src="image/img_07.png">Amargeddon vs Amongus</th>
                  <td>Gaming</td>
                  <td>356,021</td>
                  <td>654,152</td>
                  <td>1,458</td>
                  <td>235,020</td>
                  <td><a href="#"><img src="image/share.png"></a>
                  <a href="#"><img src="image/twitter.png"></a></td>
                </tr><tr>
                  <th scope="row"><img src="image/img_08.png">Abstract Superiority</th>
                  <td>Art</td>
                  <td>356,021</td>
                  <td>654,152</td>
                  <td>1,458</td>
                  <td>235,020</td>
                  <td><a href="#"><img src="image/share.png"></a>
                  <a href="#"><img src="image/twitter.png"></a></td>
                </tr><tr>
                  <th scope="row"><img src="image/img_09.png">Art for Charity</th>
                  <td>Art, Charity</td>
                  <td>356,021</td>
                  <td>654,152</td>
                  <td>1,458</td>
                  <td>235,020</td>
                  <td><a href="#"><img src="image/share.png"></a>
                  <a href="#"><img src="image/twitter.png"></a></td>
                </tr>
                <tr>
                  <th scope="row"><img src="image/img_10.png">Art, Charity</th>
                  <td>Wokeism</td>
                  <td>356,021</td>
                  <td>654,152</td>
                  <td>1,458</td>
                  <td>235,020</td>
                  <td><a href="#"><img src="image/share.png"></a>
                  <a href="#"><img src="image/twitter.png"></a></td>
                </tr>
            </tbody>
        </table> -->
    </div>
</div>
