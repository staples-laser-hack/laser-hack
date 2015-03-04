package com.teamlaser.inkpicker;

import android.os.Bundle;
import android.support.v7.app.ActionBarActivity;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.ImageView;
import android.widget.ProgressBar;

import retrofit.Callback;
import retrofit.RestAdapter;
import retrofit.RetrofitError;
import retrofit.client.Response;
import retrofit.http.GET;
import retrofit.http.Path;


public class MainActivity extends ActionBarActivity implements View.OnClickListener {

    private static final String TAG = MainActivity.class.getSimpleName();
    private ImageView image0;
    private ImageView image1;
    private ImageView image2;
    private ImageView image3;
    private ImageView image4;
    private ImageView image5;
    private ImageView image6;
    private ImageView image7;
    private ImageView image8;
    private ProgressBar progressBar;
//    private static final String BASE_URI = "http://10.29.172.162:3000";
    private static final String BASE_URI = "http://10.29.173.85";

    public interface InkPickService {
        @GET("/inkpicker/{tag}")
        void pickInk(
                @Path("tag") int tag,
                Callback<InkPickResponse> callback
        );
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        image0 = (ImageView) findViewById(R.id.img0);
        image1 = (ImageView) findViewById(R.id.img1);
        image2 = (ImageView) findViewById(R.id.img2);
        image3 = (ImageView) findViewById(R.id.img3);
        image4 = (ImageView) findViewById(R.id.img4);
        image5 = (ImageView) findViewById(R.id.img5);
        image6 = (ImageView) findViewById(R.id.img6);
        image7 = (ImageView) findViewById(R.id.img7);
        image8 = (ImageView) findViewById(R.id.img8);
        progressBar = (ProgressBar) findViewById(R.id.progressCircle);
        progressBar.setVisibility(View.GONE);

        image0.setTag(0);
        image1.setTag(1);
        image2.setTag(2);
        image3.setTag(3);
        image4.setTag(4);
        image5.setTag(5);
        image6.setTag(6);
        image7.setTag(7);
        image8.setTag(8);

        image0.setOnClickListener(this);
        image1.setOnClickListener(this);
        image2.setOnClickListener(this);
        image3.setOnClickListener(this);
        image4.setOnClickListener(this);
        image5.setOnClickListener(this);
        image6.setOnClickListener(this);
        image7.setOnClickListener(this);
        image8.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        int tag = (int)v.getTag();
        makeGetRequest(tag);
    }


    private void makeGetRequest(int tag) {
        RestAdapter restAdapter = new RestAdapter.Builder()
                .setEndpoint(BASE_URI)
                .build();
        InkPickService service = restAdapter.create(InkPickService.class);
        progressBar.setVisibility(View.VISIBLE);
        service.pickInk(tag, new Callback<InkPickResponse>() {
            @Override
            public void success(InkPickResponse inkPickResponse, Response response) {
                Log.d(TAG, "Response status: "+inkPickResponse.getStatus());
                progressBar.setVisibility(View.GONE);
            }

            @Override
            public void failure(RetrofitError error) {
                Log.e(TAG, error.getUrl());
                error.printStackTrace();
                progressBar.setVisibility(View.GONE);
            }
        });
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
}
