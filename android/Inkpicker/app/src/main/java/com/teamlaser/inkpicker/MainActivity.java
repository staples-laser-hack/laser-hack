package com.teamlaser.inkpicker;

import android.os.Bundle;
import android.support.v7.app.ActionBarActivity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.ImageView;
import android.widget.Toast;


public class MainActivity extends ActionBarActivity implements View.OnClickListener {

    private ImageView image0;
    private ImageView image1;
    private ImageView image2;
    private ImageView image3;
    private ImageView image4;
    private ImageView image5;
    private ImageView image6;
    private ImageView image7;
    private ImageView image8;


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
        Toast.makeText(this, tag+"", Toast.LENGTH_SHORT).show();
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
